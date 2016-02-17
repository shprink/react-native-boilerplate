import styles from './styles.js';
import React, {Text, View, ToolbarAndroid, ScrollView, Dimensions, ListView, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ANDROID_HEADER_HEIGHT, ANDROID_STATUSBAR_HEIGHT} from '../../config';
import dataSource from '../data.json';
import MovieCell from '../MovieCell';

export default class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(dataSource.movies),
        }
    }

    selectMovie(movie: Object) {
      this.props.navigator.push({
        title: movie.title,
        id: 'homeItem',
        item: movie,
      });
    }

    renderRow (
      movie: Object,
      sectionID: number | string,
      rowID: number | string,
      highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
    ) {
      return (
           <MovieCell
               key={movie.id}
               onSelect={() => this.selectMovie(movie)}
               movie={movie}
           />)
    }

    render() {
        return (
            <View style={{marginTop: ANDROID_HEADER_HEIGHT}}>
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    scrollEventThrottle={200}
                    style={[styles.scrollView, {height: (Dimensions.get('window').height - ANDROID_HEADER_HEIGHT - ANDROID_STATUSBAR_HEIGHT)}]}>
                    <ToolbarAndroid style={styles.ToolbarAndroid} title="Home" actions={[{
                        title: 'Settings',
                        show: 'always'
                    }
                    ]} onActionSelected={this.onActionSelected}/>
                    <ListView
                        ref="listview"
                        dataSource={this.state.dataSource}
                        renderRow={(movie) => this.renderRow(movie)}
                        automaticallyAdjustContentInsets={false}
                        keyboardDismissMode="on-drag"
                        keyboardShouldPersistTaps={true}
                        showsVerticalScrollIndicator={false}
                    />
                </ScrollView>

            </View>
        );
    }
}
