import {
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  FlatList,
  Text,
  Dimensions,
  View,
  Image,
} from "react-native";
import { Text as SVGText } from "react-native-svg";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";
import { popularPlaces } from "@/assets/data/data";
import IconlyHeartIcon from "@/components/Icons/IconlyHeartIcon";
import BackIcon from "@/components/Icons/BackIcon";
import { LinearGradient } from "expo-linear-gradient";
import StarIcon from "@/components/Icons/StarIcon";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import FacilityCardItem from "@/components/FacilityCardItem";
import WifiIcon from "@/components/Icons/WifiIcon";

const categoryOptions = [
  "Location",
  "Hotels",
  "Food",
  "Adventure",
  "NightLife",
];

export default function PopularLocationDetailsScreen() {
  const { title } = useLocalSearchParams();
  const location = popularPlaces.find((place) => place.title === title);
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <View style={styles.heartIcon}>
            <IconlyHeartIcon />
          </View>
          <Link href={"/(tabs)"} style={styles.backIcon}>
            <BackIcon style={styles.backIcon} />
          </Link>
          <Image style={styles.image} source={location?.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{location?.title}</Text>
          <Text style={styles.linkMapText}>Show Map</Text>
        </View>
        <View style={styles.reviewInfoContainer}>
          <StarIcon />
          <Text>{`${location?.rating} (${location?.number_of_reviews} reviews) `}</Text>
        </View>
        {/* description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{location?.description}</Text>
          <View style={styles.readMoreContainer}>
            <Text style={styles.readMoreText}>Read More</Text>
            <FontAwesome name="chevron-down" size={14} color="#176FF2" />
          </View>
        </View>
        {/* Facilities */}
        <View style={styles.facilitiesContainer}>
          <Text style={styles.facilityTitleText}>Facilities</Text>
          <FlatList
            data={location?.facilites}
            keyExtractor={(item) => item.facilityName}
            contentContainerStyle={{ gap: 14 }}
            renderItem={({ item }) => (
              <FacilityCardItem
                icon={item.icon}
                facilityName={item.facilityName}
              />
            )}
            horizontal
          />
        </View>
        {/* Price and Book Now Call-To-Action Btn */}
        <View style={styles.footerContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.price}>{`$${location?.price}`}</Text>
          </View>
          <Pressable>
            <LinearGradient
              colors={["#176FF2", "#196EEE"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.LinearGradientStyle}
            >
              <Text
                style={{ color: "white", fontFamily: "Montserrat_700Bold" }}
              >
                Book Now
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    padding: 20,
    backgroundColor: "white",
  },
  LinearGradientStyle: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    shadowColor: "rgba(0, 56, 255, 0.24)",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.24,
    shadowRadius: 19,
    elevation: 4, // This is for Android
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    width: 223,
    height: "auto",
  },
  imageContainer: {
    width: "100%",
    height: 386,
    borderRadius: 20,
    position: "relative",
  },
  image: {
    width: "100%",
    height: 340,
    borderRadius: 20,
  },
  heartIcon: {
    position: "absolute",
    zIndex: 100,
    bottom: -2,
    right: 14,
    shadowColor: "#0038FF1A",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 4,
  },

  backIcon: {
    position: "absolute",
    zIndex: 100,
    top: 16,
    left: 16,
  },
  titleContainer: {
    marginTop: 0,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  titleText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 24,
    color: "#232323",
  },
  linkMapText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
    color: "#176FF2",
  },
  reviewInfoContainer: {
    display: "flex",
    marginTop: 8,
    marginBottom: 16,
    flexDirection: "row",
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
  },
  descriptionText: {
    fontFamily: "Montserrat_400Regular",
    fontStyle: "normal",
    fontSize: 14,
    color: "#232323",
  },
  readMoreContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 9,
    alignItems: "center",
    gap: 4,
    width: "100%",
  },
  readMoreText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
    color: "#176FF2",
  },
  facilitiesContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 24,
  },
  facilityTitleText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    marginBottom: 16,
    color: "#232323",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 24,
    alignItems: "center",
  },

  price: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 24,
    color: "#2DD7A4",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  priceLabel: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 12,
    color: "#232323",
  },
});
