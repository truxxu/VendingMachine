import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate('Products')}
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

export default Categories;
