import React from 'react';
import {FlatList} from 'react-native';

import ProductCard from '../atoms/ProductCard';

const ProductsList = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <ProductCard {...item} />}
      keyExtractor={(item) => item.title}
      numColumns={3}
    />
  );
};

export default ProductsList;
