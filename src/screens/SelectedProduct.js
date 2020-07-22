import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SelectedProduct = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SelectedProduct</Text>
      <Button
        title="Go to Payment"
        onPress={() => navigation.navigate('Payment')}
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

export default SelectedProduct;
