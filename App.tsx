import React from 'react';
import PropertysList from './src/components/PropertysList';
import {Property} from './src/interfaces/interfaces';

const App: React.FC = () => {
  const properties: Property[] = [
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
        'https://th.bing.com/th/id/OIP.QbTxK4o9qlkSwwUnbu5Y1QHaHY?pid=ImgDet&rs=1',
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

  return <PropertysList properties={properties} />;
};

export default App;
