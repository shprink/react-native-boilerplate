import styles from './styles.js';
import React, {Text, View, TouchableHighlight} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

export default class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    navigate(id = 'home', title = "Home") {
        var route = _.find(_navigator.getCurrentRoutes(), {'id': id});
        if (route) {
            _navigator.jumpTo(route);
        } else {
            _navigator.push({id: id, title: title});
        }
        _drawer.closeDrawer();
    }

    render() {
        return (
            <View style={styles.menu}>
                <Button style={{
                    backgroundColor: 'red'
                }} textStyle={{
                    fontSize: 18
                }} onPress={this.navigate.bind(this)}>
                    Go to Home
                </Button>
                <Button style={{
                    backgroundColor: 'red'
                }} textStyle={{
                    fontSize: 18
                }} onPress={this.navigate.bind(this, 'about', 'About')}>
                    Go to About
                </Button>
                <Text style={{
                    margin: 10,
                    fontSize: 15,
                    textAlign: 'left'
                }}>
                    I'm in the Drawer!
                </Text>
            </View>
        );
    }
}
