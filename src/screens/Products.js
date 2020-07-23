import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Products = ({navigation, route}) => {
  const {category} = route.params;

  return (
    <View style={styles.container}>
      <Text>Products for category {category}</Text>
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
