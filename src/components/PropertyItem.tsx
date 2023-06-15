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
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.nameAddressContainer}>
          <Image
            source={require('../assets/location.png')}
            style={styles.icon}
          />
          <Text style={styles.address}>{address}</Text>
        </View>
        <View style={styles.roomsCostContainer}>
          <View style={styles.roomsContainer}>
            <Image source={require('../assets/bed.png')} style={styles.icon} />
            <Text>{rooms} </Text>
            <Image source={require('../assets/bath.png')} style={styles.icon} />
            <Text>{bathrooms} </Text>
            <Image source={require('../assets/area.png')} style={styles.icon} />
            <Text>{surface}</Text>
          </View>
          <View style={styles.costContainer}>
            <Text style={styles.cost}>{cost}</Text>
            <View style={styles.heartContainer}>
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'aliceblue',
    padding: 20,
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
    bottom: 5,
    left: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgb(170, 165, 0)',
  },
  starText: {
    color: 'black',
    marginRight: 5,
  },
  starIcon: {
    width: 20,
    height: 20,
  },
  detailsContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: 5,
    marginLeft: 8,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'center',
  },

  roomsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  nameAddressContainer: {
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
  roomsCostContainer: {
    marginTop: 5,
  },
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10, // Cambiado
  },
  cost: {
    fontWeight: 'bold',
  },

  heartContainer: {
    alignSelf: 'flex-end', // Ajusta la alineación vertical del corazón al final
    top: 10,
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
});

export default PropertyItem;
