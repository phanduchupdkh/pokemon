import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Pokemons from './component/pokemons';

const App = () => {
  return (
    <View>
      <Pokemons />
      <Text>Made by Phan Xuân Đức</Text>
    </View>
  );
};

export default App;
