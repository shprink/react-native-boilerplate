import styles from './styles.js';
import React, {
    Component,
    Text,
    View,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    Navigator,
    BackAndroid,
    TouchableOpacity
} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../../home/android/index';
import HomeItem from '../../home/item/index';
import About from '../../about/android/index';
import Menu from '../../menu/android/index';
import {ANDROID_HEADER_HEIGHT} from '../../config';

export default class App extends Component {

    constructor(props, context) {
        super(props, context);

        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (_navigator.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigator.pop();
            return true;
        });
    }

    navigatorRenderScene(route, navigator) {
        _navigator = navigator;
        switch (route.id) {
            case 'home':
                return (<Home navigator={navigator}/>);
            case 'homeItem':
                return (<HomeItem item={route.item} title={route.title} navigator={navigator}/>);
            case 'about':
                return (<About navigator={navigator}/>);
        }
    }

    render() {
        var NavigationBarRouteMapper = {
            LeftButton: function(route, navigator, index, navState) {
                let menu = (
                    <TouchableOpacity onPress={() => _drawer.openDrawer()} style={styles.navBarLeftButton}>
                        <Icon name="navicon-round" size={40} color="#333"/>
                    </TouchableOpacity>
                );
                if (index === 0) {
                    return (
                        <View style={styles.navBarLeftButtonGroup}>
                            {menu}
                        </View>
                    );
                }

                var previousRoute = navState.routeStack[index - 1];
                return (
                    <View style={styles.navBarLeftButtonGroup}>
                        {menu}
                        <TouchableOpacity onPress={() => navigator.pop()} style={[styles.navBarLeftButton, styles.navBarLeftButtonBack]}>
                            <Icon name="ios-arrow-back" size={40} color="#333"/>
                            <Text style={styles.navBarLeftButtonText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                );
            },

            RightButton: function(route, navigator, index, navState) {
                return (
                    <TouchableOpacity onPress={() => navigator.pop()} style={styles.navBarRightButton}>
                        <Icon name="gear-a" size={30} color="#333"/>
                    </TouchableOpacity>
                );
            },

            Title: function(route, navigator, index, navState) {
                return (
                    <View style={styles.navBarTitle}>
                        <Text style={styles.navBarTitleText}>
                            {route.title}
                        </Text>
                    </View>
                );
            }
        };
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                ref={(drawer) => { _drawer = drawer; }}
                renderNavigationView={() => (<Menu />)}>
                <Navigator
                    style={styles.container}
                    initialRoute={{id: 'home', title: 'Home'}}
                    navigationBar={
                        <Navigator.NavigationBar
                        style={[styles.menu, {height: ANDROID_HEADER_HEIGHT}]}
                        routeMapper={NavigationBarRouteMapper} />}
                    renderScene={this.navigatorRenderScene}/>
            </DrawerLayoutAndroid>
        );
    }
}
