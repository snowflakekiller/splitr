/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Route } from 'react-router-native';
import Signup from './Signup';
import Login from './Login';
import Welcome from './Welcome';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Navigator
} from 'react-native';

// class Button extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   _onPressButton() {
//     console.log("Button Pressed");
//
//   }
//
//   render() {
//     return(
//         <TouchableHighlight style={styles.buttonTouch} onPress={this._onPressButton} underlayColor='rgba(153, 153, 153, 0.2)'>
//           <Text style={styles.button}>{this.props.text}</Text>
//         </TouchableHighlight>
//     )
//   }
// }

class AwesomeProject extends Component {
  render () {
    return (
      <Navigator
        initialRoute={{id: 'Welcome', name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if(route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'Welcome') {
      return (
        <Welcome navigator={navigator}/>
      );
    }
    if (routeId === 'Signup') {
      return (
        <Signup navigator={navigator}/>
      );
    }
    if (routeId === 'Login') {
      return (
        <Login navigator={navigator}/>
      );
    }
  }


  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.logoWrapper}>
  //         <Text style={styles.logo}>
  //           SPLTR
  //         </Text>
  //       </View>
  //       <View style={styles.buttonsWrapper}>
  //         <Button text="SIGN UP" />
  //         <Button text="LOGIN" />
  //       </View>
  //     </View>
  //   );
  // }
}

// class Navigation extends React.Component{
//   render() {
//     return (
//       <Navigator
//         style={styles.container}
//         initialRoute=\{\{id: 'first'}}
//         renderScene={this.navigatorRenderScene}/>
//     );
//   }
//
//   navigatorRenderScene(route, navigator) {
//     _navigator = navigator;
//     switch (route.id) {
//       case 'signup':
//         return (<First navigator={navigator} title="signup"/>);
//       case 'login':
//         return (<Second navigator={navigator} title="login" />);
//     }
//   }
// }

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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
