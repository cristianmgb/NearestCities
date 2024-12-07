import {RootState} from '../store';

export const nearestCitiesSelector = (state: RootState) =>
  state.nearestCitiesReducer;
