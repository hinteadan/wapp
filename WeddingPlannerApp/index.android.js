/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class WeddingPlannerApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native, WeddingPlannerApp!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

class Layout extends Component {
  render() {
    return <Image style={styles.wallpaper} source={require('./img/wallpaper.jpg')}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Wedding Planner App!
        </Text>
      </View>
    </Image>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  wallpaper: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
});

AppRegistry.registerComponent('WeddingPlannerApp', () => Layout);
