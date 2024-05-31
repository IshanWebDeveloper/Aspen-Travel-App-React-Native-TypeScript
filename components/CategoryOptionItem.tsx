import { View, Text, Pressable, StyleSheet } from "react-native";

interface CategoryOptionItemProps {
  categoryName: string;
}

const CategoryOptionItem = ({ categoryName }: CategoryOptionItemProps) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: "Montserrat_400Regular",
          fontSize: 14,
          fontStyle: "normal",
        }}
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
});
