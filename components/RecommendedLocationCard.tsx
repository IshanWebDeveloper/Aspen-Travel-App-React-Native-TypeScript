import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import TrendingUp from "./Icons/TrendingUpIcon";

interface RecommendedLocationCardProps {
  duration: string;
  image: any;
  title: string;
}

const RecommendedLocationCard = ({
  duration,
  image,
  title,
}: RecommendedLocationCardProps) => {
  return (
    <LinearGradient
      colors={["#FFF", "#F5F5F5"]}
      start={{ x: 0.0274, y: 0 }}
      end={{ x: 0.9394, y: 1 }}
      style={styles.container}
    >
      <Image style={styles.imageBackground} source={image} />
      <View style={styles.durationContainer}>
        <Text style={styles.durationText}>{duration}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.cardFooter}>
        <TrendingUp />
        <Text style={styles.cardFooterText}>Hot Deal</Text>
      </View>
    </LinearGradient>
  );
};

export default RecommendedLocationCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 16,
    borderWidth: 1,
    width: "auto",
    height: "auto",
    marginRight: 20,
    borderColor: "white",
    backgroundColor: "transparent",
    shadowColor: "rgba(151, 160, 178, 0.17)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.17,
    shadowRadius: 20,
    padding: 4,
    elevation: 4,
  },
  imageBackground: {
    width: 166,
    height: 96,
    borderRadius: 24,
    resizeMode: "repeat",
  },
  durationContainer: {
    position: "absolute",
    display: "flex",
    borderRadius: 9,
    paddingVertical: 2,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    width: 48,
    height: 24,
    backgroundColor: "#3A544F",
    right: 13,
    bottom: 45,
  },
  durationText: {
    fontSize: 10,
    fontFamily: "Montserrat_500Medium",
    color: "white",
  },
  title: {
    fontSize: 14,
    marginTop: 6,
    fontFamily: "Montserrat_700Bold",
    color: "#232323",
  },

  cardFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
    height: 23,
  },

  cardFooterText: {
    fontSize: 12,
    fontFamily: "Montserrat_500Medium",
    color: "#3A544F",
    marginLeft: 4,
  },
});
