import { View, Text, StyleSheet } from "react-native";

interface CategoryOptionItemProps {
  categoryName: string;
  selectedCategory: string;
}

const CategoryOptionItem = ({
  categoryName,
  selectedCategory,
}: CategoryOptionItemProps) => {
  return (
    <View>
      <Text
        style={[
          styles.text,

          selectedCategory === categoryName && {
            color: "#176FF2",
            fontFamily: "Montserrat_700Bold",
          },
        ]}
      >
        {categoryName}
      </Text>
    </View>
  );
};

export default CategoryOptionItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 10,
    borderRadius: 33,
  },
  text: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    color: "#7E7E7E",
  },
});
