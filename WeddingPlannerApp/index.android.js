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
  Image,
  Button,
} from 'react-native';
import { StackNavigator, } from 'react-navigation';

export default class Hello extends Component {
  static navigationOptions = {
    title: 'Hello moto',
  };
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
  static navigationOptions = {
    title: 'Wedding App',
  };
  render() {
    const { navigate } = this.props.navigation;
    return <Image style={styles.wallpaper} source={require('./img/wallpaper.jpg')}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Wedding Planner App!
        </Text>
        <Button title="Begin" onPress={_ => navigate('Test')} />
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

const WeddingPlannerApp = StackNavigator({
  Main: { screen: Layout },
  Test: { screen: Hello },
});

AppRegistry.registerComponent('WeddingPlannerApp', () => WeddingPlannerApp);
