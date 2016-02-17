import styles from './styles.js';
import React, {
    Component,
    Text,
    View,
    TabBarIOS,
    Navigator,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../../home/ios/index';
import HomeItem from '../../home/item/index';
// import About from '../../about/ios/index';
import {IOS_HEADER_HEIGHT} from '../../config';

export default class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedTab: 'home'
    };
  }

   _renderContent (color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  }

  navigatorRenderScene(route, navigator) {
      _navigator = navigator;

      switch (route.id) {
          case 'home':
          case 'about':
          case 'params':
               return (
                   <TabBarIOS
                       tintColor="white"
                       barTintColor="darkslateblue">
                       <Icon.TabBarItem
                           title="Home"
                           iconName="ios-home-outline"
                           selectedIconName="ios-home"
                           selected={route.id === 'home'}
                           onPress={() => {
                               this.setState({
                                   selectedTab: 'blueTab',
                               });
                           }}>
                           <Home navigator={navigator}/>
                       </Icon.TabBarItem>
                       <Icon.TabBarItem
                           title="Home"
                           iconName="ios-home-outline"
                           selectedIconName="ios-home"
                           selected={route.id === 'about'}
                           onPress={() => {
                               this.setState({
                                   selectedTab: 'about'
                               });
                           }}>
                           {/*<About navigator={navigator}/>*/}
                       </Icon.TabBarItem>
                       <Icon.TabBarItem
                           title="More"
                           iconName="ios-home-outline"
                           selectedIconName="ios-home"
                           selected={route.id === 'params'}
                           onPress={() => {
                               this.setState({
                                   selectedTab: 'params'
                               });
                           }}>
                       </Icon.TabBarItem>
                   </TabBarIOS>
               )
          case 'homeItem':
              return (<HomeItem item={route.item} title={route.title} navigator={navigator}/>);
      }
  }

  render() {
      var NavigationBarRouteMapper = {
          LeftButton: function(route, navigator, index, navState) {
              if (index === 0) {
                  return;
              }

              var previousRoute = navState.routeStack[index - 1];
              return (
                  <View style={styles.navBarLeftButtonGroup}>
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
        <Navigator
            style={styles.container}
            initialRoute={{id: 'home', title: 'Home'}}
            navigationBar={
                <Navigator.NavigationBar
                style={[styles.menu, {height: IOS_HEADER_HEIGHT}]}
                routeMapper={NavigationBarRouteMapper} />}
            renderScene={this.navigatorRenderScene}/>
    );
  }
}
