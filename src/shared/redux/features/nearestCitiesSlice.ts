import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {NearestCity} from '../../../components/nearest-cities/NearestCities.interface';
import {City} from '../../../components/city-list/CityList.interface';

type NearestCities = {
  cities: NearestCity[];
  selectedCity: City;
};

export const initialState: NearestCities = {
  cities: [],
  selectedCity: {
    country: '',
    name: '',
    lat: '',
    lng: '',
  },
};

export const nearestCities = createSlice({
  name: 'NearestCities',
  initialState,
  reducers: {
    setNearestCities: (state, action: PayloadAction<NearestCities>) => {
      state.cities = action.payload.cities;
      state.selectedCity = action.payload.selectedCity;
    },
  },
});

export const {setNearestCities} = nearestCities.actions;

export default nearestCities.reducer;
