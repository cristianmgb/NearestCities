export interface NearestCity {
  name: string;
  distance: number;
}

export interface NearestCitiesProps {
  cities: NearestCity[];
}
