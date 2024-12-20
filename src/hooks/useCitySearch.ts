import {useState, useEffect} from 'react';
import citiesData from '../assets/cities.json';
import {calculateDistance} from '../shared/utils/geoUtils';
import {useAppDispatch} from '../shared/redux/hooks';
import {setNearestCities} from '../shared/redux/features/nearestCitiesSlice';

interface City {
  country: string;
  name: string;
  lat: string;
  lng: string;
}

export interface NearestCity {
  name: string;
  distance: number;
}

export const useCitySearch = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState<City[]>([]);

  const cities: City[] = citiesData;

  useEffect(() => {
    if (query === '') {
      setFilteredCities(cities);
    } else {
      const results = cities.filter(city =>
        city.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredCities(results);
    }
  }, [cities, query]);

  const findNearestCities = (selectedCity: City) => {
    const distances = cities
      .map(city => ({
        ...city,
        distance: calculateDistance(
          selectedCity.lat,
          selectedCity.lng,
          city.lat,
          city.lng,
        ),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(1, 5);
    dispatch(setNearestCities({cities: distances, selectedCity}));
  };

  return {query, setQuery, filteredCities, findNearestCities};
};
