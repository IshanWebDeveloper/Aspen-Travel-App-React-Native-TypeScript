import {
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationIcon from "@/components/Icons/Location";
import { FontAwesome } from "@expo/vector-icons";
import SearchIcon from "@/components/Icons/SearchIcon";
import CategoryOptionItem from "@/components/CategoryOptionItem";
import { useState } from "react";
import LocationCard from "@/components/LocationCard";
import { popularPlaces, recommendedPlaces } from "@/assets/data/data";
import RecommendedLocationCard from "@/components/RecommendedLocationCard";
import Colors from "@/constants/Colors";

const categoryOptions = [
  "Location",
  "Hotels",
  "Food",
  "Adventure",
  "NightLife",
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Location");
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.locationHeaderDropDown}>
          <LocationIcon />
          <Text style={styles.locationHeaderDropDownText}>Aspen, USA</Text>
          <FontAwesome name="chevron-down" size={12} color="#176ff2" />
        </View>
        <View>
          <Text style={styles.screenSubTitle}>Explore</Text>
          <Text style={styles.screenTitle}>Aspen</Text>
          <View style={styles.searchContainer}>
            <SearchIcon />
            <TextInput placeholder="Find things to do"></TextInput>
          </View>
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 24 }}
          >
            {categoryOptions.map((category) => (
              <Pressable
                onPress={() => setSelectedCategory(category)}
                key={category}
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  marginRight: 20,
                  borderRadius: 33,
                  backgroundColor:
                    selectedCategory === category
                      ? "linear-gradient(271deg, rgba(23, 111, 242, 0.05) 1.64%, rgba(25, 110, 238, 0.05) 102.71%)"
                      : "white",
                }}
              >
                <CategoryOptionItem key={category} categoryName={category} />
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 24 }}
          >
            <View>
              <View style={styles.carouselTitleContainer}>
                <Text style={styles.carouselTitle}>Popular</Text>
                <Text style={styles.linkText}>See All</Text>
              </View>
              <View style={{ marginTop: 24 }}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={popularPlaces}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <LocationCard
                      title={item.title}
                      image={item.image}
                      rating={item.rating}
                      favorites={item.favorites}
                    />
                  )}
                  keyExtractor={(item) => item.title}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 24 }}
          >
            <View>
              <View style={styles.carouselTitleContainer}>
                <Text style={styles.carouselTitle}>Recommended</Text>
              </View>
              <View style={{ marginTop: 24 }}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={recommendedPlaces}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <RecommendedLocationCard
                      title={item.title}
                      image={item.image}
                      duration={item.duration}
                      key={item.title}
                    />
                  )}
                  keyExtractor={(item) => item.title}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  locationHeaderDropDown: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  locationHeaderDropDownText: {
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    padding: 20,
    backgroundColor: Colors.light.background,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: "#F3F8FE",
    padding: 16,
    marginTop: 24,
    gap: 10,
  },
  screenTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 24,
    fontStyle: "normal",
  },
  screenSubTitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    fontStyle: "normal",
  },
  carouselTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },
  carouselTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    fontStyle: "normal",
  },
  linkText: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 12,
    fontStyle: "normal",
    color: "#176ff2",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
