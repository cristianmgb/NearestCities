export interface City {
  country: string;
  name: string;
  lat: string;
  lng: string;
}

export interface CityListProps {
  cities: City[];
  onSelect: (city: City) => void;
}
