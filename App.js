import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>Vending Machine App</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
