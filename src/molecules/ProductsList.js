import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

import ProductCard from '../atoms/ProductCard';

const ProductsList = ({data, category}) => {
  return (
    <View>
      <Text style={styles.text}>{category}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <ProductCard {...item} />}
        keyExtractor={(item) => item.title}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3ec1d3',
    marginVertical: 20,
  },
});

export default ProductsList;
