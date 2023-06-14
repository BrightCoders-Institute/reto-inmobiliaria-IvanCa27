import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {PropertyItemProps} from '../interfaces/interfaces';

const PropertyItem: React.FC<PropertyItemProps> = ({property}) => {
  const {image, qualification, name, address, rooms, bathrooms, surface, cost} =
    property;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.starContainer}>
          <Image
            source={require('../assets/star.png')}
            style={styles.starIcon}
          />
          <Text style={styles.starText}>{qualification}</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Image source={require('../assets/location.png')} style={styles.icon} />
        <Text style={styles.address}>{address}</Text>
        <Image source={require('../assets/bed.png')} style={styles.icon} />
        <Text>{rooms} </Text>
        <Image source={require('../assets/bath.png')} style={styles.icon} />
        <Text>{bathrooms} </Text>
        <Image source={require('../assets/area.png')} style={styles.icon} />
        <Text>{surface}</Text>
      </View>
      <View style={styles.costContainer}>
        <Text style={styles.cost}>{cost}</Text>
        <Image
          source={require('../assets/hearthBackground.png')}
          style={styles.heartIcon}
        />
        <Image
          source={require('../assets/hearth.png')}
          style={styles.heartIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  starContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  starText: {
    color: '#fff',
    marginRight: 5,
  },
  starIcon: {
    width: 20,
    height: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  address: {
    marginTop: 5,
  },
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  cost: {
    fontWeight: 'bold',
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
});

export default PropertyItem;
