import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {typography} from '../styles';

const CategoryCard = () => {
  return (
    <View style={styles.container}>
      <Icon name="hamburger" style={styles.icon} />
      <Text style={styles.text}>Drinks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 50,
  },
  text: {
    color: 'whitesmoke',
    fontWeight: 'bold',
    fontSize: 40,
    ...typography.shadow,
  },
  icon: {
    margin: 20,
    fontSize: 100,
    color: 'whitesmoke',
    ...typography.shadow,
  },
});

export default CategoryCard;
