import styles from './styles.js';
import React, {
    Text,
    View,
    ScrollView,
    ToolbarAndroid,
    Dimensions
} from 'react-native';
import {ANDROID_HEADER_HEIGHT, ANDROID_STATUSBAR_HEIGHT} from '../../config';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <View style={{marginTop: ANDROID_HEADER_HEIGHT}}>
            <ScrollView
                automaticallyAdjustContentInsets={false}
                scrollEventThrottle={200}
                style={[styles.scrollView, {height: (Dimensions.get('window').height - ANDROID_HEADER_HEIGHT - ANDROID_STATUSBAR_HEIGHT)}]}>
                <ToolbarAndroid
                    style={styles.ToolbarAndroid}
                    title="About"
                    actions={[{title: 'Settings',  show: 'always'}]}
                    onActionSelected={this.onActionSelected} />
                <Text>
                    This is the About page!
                </Text>
                <Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998"
                    onPress={this.loginWithFacebook}>
                    Login with Facebook
                </Icon.Button>
            </ScrollView>
        </View>
    );
  }
}
