/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

var React = require('react-native');
var {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions
} = React;
import {ANDROID_HEADER_HEIGHT, ANDROID_STATUSBAR_HEIGHT} from '../../config';
import {getImageSource} from '../Helper';

var HomeItem = React.createClass({
  render: function() {
    return (
      <ScrollView style={{marginTop: ANDROID_HEADER_HEIGHT}}>
          <View style={styles.mainSection}>
              <Image
                  source={getImageSource(this.props.item, 'det')}
                  style={styles.detailsImage}
              />
              <View style={styles.rightPane}>
                  <Text style={styles.movieTitle}>{this.props.item.title}</Text>
                  <Text>{this.props.item.year}</Text>
                  <View style={styles.mpaaWrapper}>
                      <Text style={styles.mpaaText}>
                          {this.props.item.mpaa_rating}
                      </Text>
                  </View>
              </View>
          </View>
          <View style={styles.separator} />
          <Text>
              {this.props.item.synopsis}
          </Text>
          <View style={styles.separator} />
          <Cast actors={this.props.item.abridged_cast} />
      </ScrollView>
    );
  },
});

var Cast = React.createClass({
  render: function() {
    if (!this.props.actors) {
      return null;
    }

    return (
      <View>
          <Text style={styles.castTitle}>Actors</Text>
          {this.props.actors.map(actor =>
              <Text key={actor.name} style={styles.castActor}>
              &bull; {actor.name}
          </Text>
        )}
      </View>
    );
  },
});

var styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
  rightPane: {
    justifyContent: 'space-between',
    flex: 1,
  },
  movieTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  rating: {
    marginTop: 10,
  },
  ratingTitle: {
    fontSize: 14,
  },
  ratingValue: {
    fontSize: 28,
    fontWeight: '500',
  },
  mpaaWrapper: {
    alignSelf: 'flex-start',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 3,
    marginVertical: 5,
  },
  mpaaText: {
    fontFamily: 'Palatino',
    fontSize: 13,
    fontWeight: '500',
  },
  mainSection: {
    flexDirection: 'row',
  },
  detailsImage: {
    width: 134,
    height: 200,
    backgroundColor: '#eaeaea',
    marginRight: 10,
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  castTitle: {
    fontWeight: '500',
    marginBottom: 3,
  },
  castActor: {
    marginLeft: 2,
  },
});

module.exports = HomeItem;
