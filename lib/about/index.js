import styles from './styles.js';
import React, {
    Component,
    Text,
    View
} from 'react-native';

export default class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      platform: Platform.OS,
    };
  }

  render() {
    const { instructions } = this.props;
    let { platform } = this.state;

    return (
        <View style={styles.container}>
            <Text>
                This is the About page!
            </Text>
        </View>
    );
  }
}
