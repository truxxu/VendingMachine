import React from 'react';
import {View, StyleSheet} from 'react-native';

import {spacing} from '../styles';
import ProductsList from '../molecules/ProductsList';

const productList = [
  {
    title: 'Coca-Cola',
    url: '',
    description:
      "Tasty! Get yours only here. A product description goes here. I don't know, you'll like it",
    price: 10,
  },
  {
    title: 'Currywurst mit Pommes',
    url: '',
    description: 'Tasty! Get yours only here',
    price: 10,
  },
  {
    title: 'Veggie Burger',
    url: '',
    description: 'Tasty! Get yours only here',
    price: 10,
  },
  {
    title: 'Peanuts',
    url: '',
    description: 'Tasty! Get yours only here',
    price: 10,
  },
  {
    title: 'Bratwurst',
    url: '',
    description: 'Tasty! Get yours only here',
    price: 10,
  },
];

const Products = ({navigation, route}) => {
  const category = route.params.category;

  return (
    <View style={styles.container}>
      <ProductsList data={productList} category={category} />
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
