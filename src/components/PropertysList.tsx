import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PropertyItem from './PropertyItem';
import {PropertysListProps} from '../interfaces/interfaces';

const PropertysList: React.FC<PropertysListProps> = ({properties}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={properties}
        renderItem={({item}) => <PropertyItem property={item} />}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.listContainer}
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
  listContainer: {
    paddingHorizontal: 10,
  },
});

export default PropertysList;
