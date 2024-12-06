import {City} from '../components/city-list/CityList.interface';
import {NearestCity} from '../hooks/useCitySearch';

export type AppNavigatorParams = {
  CitySearchScreen: undefined;
  NearestCitiesScreen: {
    nearestCities: NearestCity[];
    city: City;
  };
};
