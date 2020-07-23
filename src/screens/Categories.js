import React from 'react';
import {View, StyleSheet} from 'react-native';

import CategoriesList from '../molecules/CategoriesList';

const Categories = ({navigation}) => {
  const catList = [
    {
      title: 'Drinks',
      icon: 'glass-mug',
    },
    {
      title: 'Fruit',
      icon: 'food-apple',
    },
    {
      title: 'Snacks',
      icon: 'food-croissant',
    },
    {
      title: 'Pasta',
      icon: 'pasta',
    },
    {
      title: 'Burgers',
      icon: 'hamburger',
    },
    {
      title: 'Pizza',
      icon: 'pizza',
    },
  ];

  return (
    <View style={styles.container}>
      <CategoriesList data={catList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Categories;
