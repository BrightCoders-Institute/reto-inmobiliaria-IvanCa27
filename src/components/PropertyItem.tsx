import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {PropertyItemProps} from '../interfaces/interfaces';

const PropertyItem: React.FC<PropertyItemProps> = ({property}) => {
  return (
    <View style={styles.propertyContainer}>
      <Image source={{uri: property.image}} style={styles.propertyImage} />
      <View style={styles.propertyInfoContainer}>
        <Text style={styles.propertyName}>{property.name}</Text>
        <Text style={styles.propertyAddress}>Address: {property.address}</Text>
        <Text style={styles.propertyRooms}>Rooms: {property.rooms}</Text>
        <Text style={styles.propertyBathrooms}>
          Bathrooms: {property.bathrooms}
        </Text>
        <Text style={styles.propertyCost}>Cost: {property.cost}</Text>
        {/* Otros detalles de la propiedad */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  propertyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  propertyImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  propertyInfoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  propertyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  propertyAddress: {
    fontSize: 14,
    marginBottom: 3,
  },
  propertyRooms: {
    fontSize: 14,
    marginBottom: 3,
  },
  propertyBathrooms: {
    fontSize: 14,
    marginBottom: 3,
  },
  propertyCost: {
    fontSize: 14,
    marginBottom: 3,
  },
});

export default PropertyItem;
