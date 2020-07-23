import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {typography, spacing} from '../styles';

const CategoryCard = ({title, icon}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Products', {category: title})}>
      <View style={styles.iconContainer}>
        <Icon name={icon} style={styles.icon} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3ec1d3',
    borderRadius: 10,
    padding: 45,
    margin: 10,
    ...spacing.centered,
    ...spacing.shadow,
  },
  text: {
    color: 'whitesmoke',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 10,
    ...typography.shadow,
  },
  icon: {
    margin: 20,
    fontSize: 130,
    color: '#3ec1d3',
    ...typography.shadow,
  },
  iconContainer: {
    backgroundColor: 'whitesmoke',
    height: 180,
    width: 180,
    borderRadius: 90,
    ...spacing.centered,
  },
});

export default CategoryCard;
