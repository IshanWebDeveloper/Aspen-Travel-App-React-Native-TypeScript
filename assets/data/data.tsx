import BathTubIcon from "@/components/Icons/BathTubIcon";
import CutleryIcon from "@/components/Icons/CutleryIcon";
import PoolIcon from "@/components/Icons/PoolIcon";
import WifiIcon from "@/components/Icons/WifiIcon";
import { Facilities, PopularPlace, RecommendedPlace } from "@/types";

export const popularPlaces: PopularPlace[] = [
  {
    title: "Alley Palace",
    location: "3818 Grindelwald, Switzerland",
    favorites: true,
    rating: 4.1,
    number_of_reviews: 350,
    description:
      "The Alley Palace is a luxurious hotel located in the heart of Grindelwald, Switzerland. The hotel offers a variety of amenities and services to make your stay as comfortable and enjoyable as possible. The hotel is located in a prime location, with easy access to the city's top attractions and landmarks. Whether you're traveling for business or pleasure, the Alley Palace is the perfect choice for your next trip to Grindelwald.",
    price: 200,
    facilites: [{ icon: <WifiIcon />, facilityName: Facilities.ONE_HEATER }],
    image: require("../../assets/images/alley_palace.png"),
  },
  {
    title: "Coeurdes Alpes",
    location: "3818 Grindelwald, Switzerland",
    favorites: false,
    rating: 4.5,
    number_of_reviews: 355,
    description:
      "Aspen is as close as one can get to a storybook alpine town in America. The choose-your-own-adventure possibilities—skiing, hiking, dining shopping and ....",
    price: 199,
    facilites: [
      {
        icon: <WifiIcon />,
        facilityName: Facilities.ONE_HEATER,
      },
      {
        icon: <CutleryIcon />,
        facilityName: Facilities.DINNER,
      },
      {
        icon: <BathTubIcon />,
        facilityName: Facilities.ONE_TUB,
      },
      {
        icon: <PoolIcon />,
        facilityName: Facilities.POOL,
      },
    ],
    image: require("../../assets/images/Coeurdes_Alpes.png"),
  },
];

export const recommendedPlaces: RecommendedPlace[] = [
  {
    title: "Explore Aspen",
    duration: "4N/5D",
    image: require("../../assets/images/zurich_downtown.png"),
  },
  {
    title: "Luxurious Aspen",
    duration: "2N/3D",
    image: require("../../assets/images/the_little_nell_hotel_aspen.jpeg"),
  },
];
