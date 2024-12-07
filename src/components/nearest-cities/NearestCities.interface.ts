import {City} from '../city-list/CityList.interface';

export interface NearestCity {
  name: string;
  distance: number;
}

export interface NearestCitiesProps {
  cities?: NearestCity[];
  selectedCity?: City;
}
