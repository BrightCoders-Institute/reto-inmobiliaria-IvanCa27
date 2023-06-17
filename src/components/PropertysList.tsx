import React from 'react';
import {ScrollView} from 'react-native';
import PropertyItem from './PropertyItem';
import Properties from '../databases/data.json';
import {PropertysListProps} from '../interfaces/interfaces';

const PropertysList: React.FC<PropertysListProps> = ({
  properties: _properties,
}) => {
  return (
    <ScrollView>
      {Properties.properties.map((property, index) => (
        <PropertyItem key={index} property={property} />
      ))}
    </ScrollView>
  );
};

export default PropertysList;
