import React from 'react';
import {render} from '@testing-library/react-native';
import PropertysList from '../src/components/PropertysList';

const mockProperties = [
  {
    address: '3517 W. Gray St. Utica',
    bathrooms: 2,
    cost: '$440/m',
    image:
      'https://ap.rdcpix.com/6772053682b695a4143ad6be12b3e050l-m2747259734od-w480_h360_x2_s1.jpg',
    name: 'The Willows',
    qualification: 5,
    rooms: 3,
    surface: '230 ft²',
  },
  {
    address: '3517 W. Gray St. Utica',
    bathrooms: 2,
    cost: '$440/m',
    image:
      'https://www.trulia.com/pictures/thumbs_6/zillowstatic/fp/2def03362bc2fdd2b893402cbb06d50a-full.jpg',
    name: 'Orchard House',
    qualification: 4.8,
    rooms: 3,
    surface: '230 ft²',
  },
  {
    address: '3517 W. Gray St. Utica',
    bathrooms: 2,
    cost: '$440/m',
    image: 'https://p.rdcpix.com/v03/l206a7344-m0xd-w1020_h770_q80.jpg',
    name: 'Orchard House',
    qualification: 3.6,
    rooms: 3,
    surface: '230 ft²',
  },
  {
    address: '3517 W. Gray St. Utica',
    bathrooms: 2,
    cost: '$440/m',
    image: 'https://ssl.cdn-redfin.com/photo/104/bigphoto/852/11022852_0.jpg',
    name: 'The Willows',
    qualification: 2.4,
    rooms: 3,
    surface: '230 ft²',
  },
  {
    address: '3517 W. Gray St. Utica',
    bathrooms: 2,
    cost: '$440/m',
    image:
      'https://ca-times.brightspotcdn.com/dims4/default/a0e2106/2147483647/strip/true/crop/1024x621+0+0/resize/1200x728!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F25%2F35%2Ff69c9b4243779b2fb8cc858f1691%2Fimage-1.jpeg',
    name: 'Corner House',
    qualification: 1.2,
    rooms: 3,
    surface: '230 ft²',
  },
  {
    address: '3517 W. Gray St. Utica',
    bathrooms: 2,
    cost: '$440/m',
    image: 'https://ssl.cdn-redfin.com/photo/92/bigphoto/699/1246699_1.jpg',
    name: 'Orchard House',
    qualification: 0,
    rooms: 3,
    surface: '230 ft²',
  },
];

test('renders property list correctly', () => {
  const {getAllByTestId} = render(
    <PropertysList properties={mockProperties} />,
  );
  const propertyItems = getAllByTestId('property-item');

  expect(propertyItems.length).toBe(mockProperties.length);
});
