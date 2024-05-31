import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import IconlyHeartIcon from "./Icons/IconlyHeartIcon";
import IconlyHeartSmallIcon from "./IconlyHeartSmallIcon";
import favorites from "@/app/(tabs)/favorites";
import StarIcon from "./Icons/StarIcon";

interface LocationCardProps {
  title: string;
  rating: number;
  favorites: boolean;
  image: any;
}

const LocationCard = ({
  title,
  rating,
  favorites,
  image,
}: LocationCardProps) => {
  return (
    <Link href={`(location)/${title}`} asChild>
      <Pressable>
        <LinearGradient
          colors={["rgba(42, 90, 82, 0.00)", "#2A5A52"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.container}
        >
          <Image style={styles.imageBackground} source={image} />
          <View style={styles.infoContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <StarIcon />
              <Text style={styles.text}>{rating}</Text>
            </View>
          </View>
          {favorites && (
            <View style={styles.favoritesContainer}>
              <IconlyHeartSmallIcon />
            </View>
          )}
        </LinearGradient>
      </Pressable>
    </Link>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  container: {
    flexShrink: 0,
    flex: 1,
    position: "relative",
    width: 188,
    height: 248,
    marginRight: 26,
    borderRadius: 24,
    backgroundColor: "transparent",
    shadowColor: "rgba(36, 129, 216, 0.29)",
    shadowOffset: { width: 0, height: 11.051 },
    shadowOpacity: 1,
    shadowRadius: 25.787,
    elevation: 4, // Th
    borderColor: "black",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 42,
    left: 12,
    gap: 4,
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 59,
    backgroundColor: "#4D5652",
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 10,
    width: "auto",
    height: 23,
    gap: 4,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 59,
    backgroundColor: "#4D5652",
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 12,
    width: "100%",
    height: 23,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
    resizeMode: "cover",
  },
  favoritesContainer: { position: "absolute", bottom: 16, right: 16 },
  text: {
    fontSize: 12,
    fontWeight: "normal",
    fontFamily: "Montserrat_500Medium",
    zIndex: 100,
    bottom: 0,
    left: 0,
    right: 0,
    color: "white",
  },
});
