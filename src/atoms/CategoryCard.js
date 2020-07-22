import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CategoryCard = () => {
  return (
    <View style={styles.container}>
      <Icon name="rocket" size={30} color="whitesmoke" />
      <Text style={styles.text}>Drinks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
});

export default CategoryCard;
