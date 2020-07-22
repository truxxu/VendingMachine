import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Products = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Button
        title="Go to SelectedProduct"
        onPress={() => navigation.navigate('SelectedProduct')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Products;
