import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import PropertyItem from '../src/components/PropertyItem';

describe('PropertyItem', () => {
  test('should change heart image on click', () => {
    const property = {
      address: '3517 W. Gray St. Utica',
      bathrooms: 2,
      cost: '$440/m',
      image:
        'https://ap.rdcpix.com/6772053682b695a4143ad6be12b3e050l-m2747259734od-w480_h360_x2_s1.jpg',
      name: 'The Willows',
      qualification: 5,
      rooms: 3,
      surface: '230 ft²',
    };

    const {getByTestId} = render(<PropertyItem property={property} />);
    const heartIcon = getByTestId('heart-icon');

    // Verificar que el corazón tenga la imagen inicial
    expect(heartIcon.props.source).toEqual(require('../src/assets/hearth.png'));

    // Hacer clic en el corazón
    fireEvent.press(heartIcon);

    // Verificar que el corazón tenga la nueva imagen
    expect(heartIcon.props.source).toEqual(
      require('../src/assets/colorHearth.png'),
    );
  });
});
