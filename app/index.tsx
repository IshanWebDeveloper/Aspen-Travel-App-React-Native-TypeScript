import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Button from "@/components/Button";

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splash_screen.jpeg")}
        style={styles.image}
        resizeMode="stretch"
      />
      <Text style={styles.titleText}>Aspen</Text>

      <View style={styles.welcomeTextContainer}>
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontFamily: "Montserrat",
            fontWeight: "bold",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Plan Your</Text>
          {"\n"}
          <Text>Luxurious Vacation</Text>
        </Text>
        <Button text="Explore" />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    zIndex: 100,
    position: "absolute",
    fontSize: 116,
    letterSpacing: 9.8,
    top: "15%",

    fontFamily: "Hiatus",
    color: "white",
  },

  welcomeTextContainer: {
    position: "absolute",
    display: "flex",
    zIndex: 100,
    width: 300,
    height: 175,
    bottom: 122,

    left: 30,
    color: "white",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
