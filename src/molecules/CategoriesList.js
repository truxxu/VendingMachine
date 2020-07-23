import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {spacing} from '../styles';
import CategoryCard from '../atoms/CategoryCard';

const CategoriesList = ({data}) => {
  const renderCategories = () => {
    return data.map((cat) => {
      return <CategoryCard {...cat} key={cat.title} />;
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderCategories()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...spacing.centered,
  },
});

export default CategoriesList;
