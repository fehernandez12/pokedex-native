import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FavList } from "../screens/FavList";
import { PokemonScreen } from "../screens/PokemonScreen";

const Stack = createStackNavigator();

function FavsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavsNav"
        component={FavList}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}

export { FavsNavigation };
