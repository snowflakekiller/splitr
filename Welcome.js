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
  TextInput,
  TouchableHighlight,
  View,
  Navigator
} from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  _gotoPage(pageId) {
    this.props.navigator.push({
      id: pageId
    });

  }

  render() {
    return(
        <TouchableHighlight style={styles.buttonTouch} onPress={this._gotoPage(this.props.pageId).bind(this)} underlayColor='rgba(153, 153, 153, 0.2)'>
          <Text style={styles.button}>{this.props.text}</Text>
        </TouchableHighlight>
    )
  }
}

export default class Welcome extends Component {
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
      />
    );
  }

  renderScene(route, navigator) {
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>
          SPLTR
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button text='SIGN UP' pageId='Signup'/>
        <Button text='LOGIN' pageId='Login'/>
      </View>
    </View>
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    logoWrapper: {
      flex: 5,
      paddingTop: 40,
    },
    logo: {
      color: 'black',
      fontSize: 48,
    },
    buttonsWrapper: {
      flex: 2,
      flexDirection: 'row',
    },
    buttonTouch: {
      height: 38,
      width: 85,
      paddingTop: 10
    },
    button: {
      flex: 1,
      textAlign: 'center',
      color: '#80cbc4',
    },

  });
