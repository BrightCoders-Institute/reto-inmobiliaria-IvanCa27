import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

interface Property {
  address: string;
  bathrooms: number;
  cost: number;
  favorite: null;
  image: string;
  name: string;
  qualification: number;
  rooms: number;
  surface: {
    length: number;
    width: number;
    height: null;
    unit: string;
  };
}

const HomeScreen = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Aquí puedes realizar la solicitud a la API o usar los datos directamente
    const data: Property[] = [
      {
        address: '3517 W. Gray St. Utica',
        bathrooms: 2,
        cost: 440,
        favorite: null,
        image:
          'https://ap.rdcpix.com/6772053682b695a4143ad6be12b3e050l-m2747259734od-w480_h360_x2_s1.jpg',
        name: 'The Willows',
        qualification: 5,
        rooms: 3,
        surface: {
          length: 10,
          width: 23,
          height: null,
          unit: 'ft',
        },
      },
      // Agrega los demás objetos de tu base de datos aquí
    ];

    setProperties(data);
  }, []);

  const renderPropertyItem = ({item}: {item: Property}) => (
    <View style={styles.propertyContainer}>
      <Image source={{uri: item.image}} style={styles.propertyImage} />
      <Text>{item.name}</Text>
      <Text>Address: {item.address}</Text>
      <Text>Rooms: {item.rooms}</Text>
      <Text>Bathrooms: {item.bathrooms}</Text>
      <Text>Cost: {item.cost}</Text>
      {/* Otros detalles de la propiedad */}
    </View>
  );

  return (
    <View>
      <Text>Listado de Propiedades</Text>
      <FlatList
        data={properties}
        renderItem={renderPropertyItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  propertyContainer: {
    marginBottom: 20,
  },
  propertyImage: {
    width: 200,
    height: 150,
  },
});

export default HomeScreen;
