import React from 'react';
import {FlatList} from 'react-native';

import ProductCard from '../atoms/ProductCard';

const ProductsList = ({data}) => {
  const renderProducts = ({product}) => <ProductCard {...product} />;

  return (
    <FlatList
      data={data}
      renderItem={renderProducts}
      keyExtractor={(product) => product.title}
      numColumns={3}
    />
  );
};

export default ProductsList;
