import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {typography, spacing} from '../styles';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 20,
    ...spacing.shadow,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'whitesmoke',
    ...typography.shadow,
  },
});

export default Button;
