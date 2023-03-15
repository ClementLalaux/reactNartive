/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Home from './Home';

function App(): JSX.Element {

  return (
    <View style={{flex : 1}}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App;
