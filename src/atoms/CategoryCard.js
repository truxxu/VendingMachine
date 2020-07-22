import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CategoryCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Drinks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  text: {
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
});

export default CategoryCard;
