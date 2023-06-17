import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PropertyItemProps} from '../interfaces/interfaces';
const PropertyItem: React.FC<PropertyItemProps> = ({property}) => {
  const [isHeartSelected, setIsHeartSelected] = useState(false);
  const {image, qualification, name, address, rooms, bathrooms, surface, cost} =
    property;
  return (
    <View style={styles.container} testID="property-item">
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
            <View style={styles.itemContainer}>
              <Image
                source={require('../assets/bed.png')}
                style={styles.icon}
              />
              <Text>{rooms} </Text>
            </View>
            <View style={styles.itemContainer}>
              <Image
                source={require('../assets/bath.png')}
                style={styles.icon}
              />
              <Text>{bathrooms} </Text>
            </View>
            <View style={styles.itemContainer}>
              <Image
                source={require('../assets/area.png')}
                style={styles.icon}
              />
              <Text>{surface}</Text>
            </View>
          </View>
          <View style={styles.costContainer}>
            <Text style={styles.cost}>{cost}</Text>
            <View style={styles.heartContainer}>
              <Image
                source={require('../assets/hearthBackground.png')}
                style={styles.heartBackground}
              />
              <TouchableOpacity
                onPress={() => setIsHeartSelected(!isHeartSelected)}>
                <Image
                  testID="heart-icon"
                  source={
                    isHeartSelected
                      ? require('../assets/colorHearth.png')
                      : require('../assets/hearth.png')
                  }
                  style={styles.heartIcon}
                />
              </TouchableOpacity>
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
    margin: 15,
    backgroundColor: 'aliceblue',
    padding: 20,
    paddingRight: 100,
    shadowColor: '#000', // Color de la sombra
    shadowOffset: {width: 0, height: 2}, // Desplazamiento horizontal y vertical de la sombra
    shadowOpacity: 0.25, // Opacidad de la sombra
    shadowRadius: 3, // Radio de la sombra
    elevation: 5, // Solo para Android: elevación de la sombra
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 130,
    height: 150,
    borderRadius: 10,
  },
  starContainer: {
    position: 'absolute',
    bottom: 5,
    left: 47,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#FBEDB7',
    padding: 3,
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
    marginLeft: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'flex-start',
  },

  roomsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  nameAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    fontSize: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: 'contain',
  },
  name: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 20,
  },
  address: {
    marginTop: 5,
    fontSize: 15,
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
    fontSize: 18,
  },

  heartContainer: {
    alignSelf: 'flex-end', // Ajusta la alineación vertical del corazón al final
    top: 6,
    position: 'relative',
  },
  heartBackground: {
    width: 30,
    height: 30,
    top: 0,
  },
  heartIcon: {
    position: 'absolute', // Habilita el posicionamiento absoluto para el icono del corazón
    bottom: 4, // Ajusta la posición vertical del icono del corazón
    right: 5, // Ajusta la posición horizontal del icono del corazón
    width: 20,
    height: 20,
  },
});

export default PropertyItem;
