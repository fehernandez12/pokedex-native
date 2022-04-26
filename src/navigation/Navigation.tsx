import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FavsNavigation } from "./FavsNavigation";
import { PokeNavigation } from "./PokeNavigation";
import { AccountNavigation } from "./AccountNavigation";
import renderPokeBall from "./NavigationUtils";
import { textStyles } from "../utils/constants";

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator initialRouteName="PokeNav">
      <Tab.Screen
        name="Favorites"
        component={FavsNavigation}
        options={{
          tabBarLabel: "Favorites",
          tabBarLabelStyle: { fontFamily: "Nunito_400Regular", fontSize: 13 },
          tabBarIcon: ({ color, size }) => (
            <Icon name="favorite" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PokeNav"
        component={PokeNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall(),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Account",
          tabBarLabelStyle: { fontFamily: "Nunito_400Regular", fontSize: 13 },
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export { Navigation };
