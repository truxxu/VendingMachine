import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Button from '../atoms/Button';

const SelectedProduct = ({navigation, route}) => {
  const {description, price} = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://via.placeholder.com/150',
        }}
      />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price}</Text>
      <Button title="Confirm" onPress={() => navigation.navigate('Payment')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
    margin: 40,
  },
  description: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'red',
  },
});

export default SelectedProduct;
