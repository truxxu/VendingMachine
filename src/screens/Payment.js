import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Payment = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Payment</Text>
      <Button title="Back to home" onPress={() => navigation.popToTop()} />
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

export default Payment;
