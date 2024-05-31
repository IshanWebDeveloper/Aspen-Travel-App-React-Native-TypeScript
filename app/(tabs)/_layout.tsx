import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Image, Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { SvgUri } from "react-native-svg";
import HomeIcon from "@/components/Icons/HomeIcon";
import TicketIcon from "@/components/Icons/TicketIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import HeartIcon from "@/components/Icons/HeartIcon";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          backgroundColor: "white",

          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 72,
          height: 72,
          borderRadius: 40,
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="tickets"
        options={{
          tabBarIcon: ({ color }) => <TicketIcon color={color} />,
          tabBarLabel: () => null,
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ color }) => <HeartIcon color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}
