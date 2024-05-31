export enum Facilities {
  ONE_HEATER = "1 HEATER",
  DINNER = "DINNER",
  ONE_TUB = "1 TUB",
  POOL = "Pool",
}

export type Facility = {
  icon: React.ReactNode;
  facilityName: Facilities;
};

export type PopularPlace = {
  title: string;
  location: string;
  favorites: boolean;
  rating: number;
  number_of_reviews: number;
  description: string;
  price: number;
  facilites: Facility[];
  image: any;
};

export type RecommendedPlace = {
  title: string;
  duration: string;
  image: any;
};
