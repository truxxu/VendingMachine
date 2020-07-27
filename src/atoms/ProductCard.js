import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {typography, spacing} from '../styles';

const ProductCard = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('SelectedProduct', {...props})}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://via.placeholder.com/150',
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.text}>${props.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#3ec1d3',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    margin: 20,
    ...spacing.shadow,
  },
  image: {
    width: 300,
    height: 300,
    margin: 20,
  },
  textContainer: {
    ...spacing.centered,
    padding: 20,
    minHeight: 136,
    maxWidth: 340,
    backgroundColor: '#3ec1d3',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'whitesmoke',
    ...typography.shadow,
  },
});
export default ProductCard;
