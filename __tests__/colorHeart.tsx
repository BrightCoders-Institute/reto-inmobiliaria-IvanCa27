import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import PropertyItem from '../src/components/PropertyItem';

describe('PropertyItem', () => {
  test('should change heart image on click', () => {
    const property = {
      // Propiedades de ejemplo para el componente PropertyItem
      image: 'https://example.com/image.jpg',
      qualification: 4,
      name: 'Ejemplo de propiedad',
      address: '123 Ejemplo Street',
      rooms: 3,
      bathrooms: 2,
      surface: '120 m²',
      cost: '$200,000',
    };

    const {getByTestId} = render(<PropertyItem property={property} />);

    const heartIcon = getByTestId('heart-icon'); // Asegúrate de que el icono del corazón tenga el atributo data-testid="heart-icon"

    // Comprueba que el corazón tenga la imagen inicial
    expect(heartIcon.getAttribute('src')).toEqual('../assets/hearth.png');

    // Simula el evento de clic en el corazón
    fireEvent.click(heartIcon);

    // Comprueba que el corazón haya cambiado de imagen
    expect(heartIcon.getAttribute('src')).toEqual('../assets/colorHeart.png');
  });
});
