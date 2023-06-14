export interface Property {
  address: string;
  bathrooms: number;
  cost: number;
  image: string;
  name: string;
  qualification: number;
  rooms: number;
  surface: string;
}

export interface PropertyItemProps {
  property: Property;
}

export interface PropertysListProps {
  properties: Property[];
}
