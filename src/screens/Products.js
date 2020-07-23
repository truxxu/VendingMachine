import React from 'react';
import {View, StyleSheet} from 'react-native';

import {spacing} from '../styles';
import ProductsList from '../molecules/ProductsList';

const productList = [
  {
    title: 'Coca-Cola',
    url: '',
  },
  {
    title: 'Currywurst mit Pommes',
    url: '',
  },
  {
    title: 'Veggie Burger',
    url: '',
  },
  {
    title: 'Peanuts',
    url: '',
  },
  {
    title: 'Bratwurst',
    url: '',
  },
];

const Products = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ProductsList data={productList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    ...spacing.centered,
  },
});

export default Products;
