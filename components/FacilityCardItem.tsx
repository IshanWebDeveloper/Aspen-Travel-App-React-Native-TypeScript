import { View, Text, StyleSheet } from "react-native";
import React from "react";
import WifiIcon from "./Icons/WifiIcon";
import { Facilities } from "@/assets/data/data";

interface FacilityCardItemProps {
  icon: React.ReactNode;
  facilityName: string;
}

const FacilityCardItem = ({ icon, facilityName }: FacilityCardItemProps) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.text}>{facilityName}</Text>
    </View>
  );
};

export default FacilityCardItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 10,
    paddingVertical: 12,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      "linear-gradient(271deg, rgba(23, 111, 242, 0.05) 1.64%, rgba(25, 110, 238, 0.05) 102.71%)",
    width: 74,
    height: 74,
    borderRadius: 16,
  },
  text: {
    marginTop: 6,
    fontSize: 10,
    lineHeight: 14,
    color: "#C9C9C9",
    fontFamily: "Montserrat_400Regular",
  },
});
