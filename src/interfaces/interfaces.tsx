export interface Property {
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

export interface PropertyItemProps {
  property: Property;
}

export interface PropertysListProps {
  properties: Property[];
}
