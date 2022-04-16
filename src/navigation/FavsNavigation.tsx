import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FavList } from "../screens/FavList";

const Stack = createStackNavigator();

function FavsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavsNav"
        component={FavList}
        options={{
          title: "Favoritos",
        }}
      />
    </Stack.Navigator>
  );
}

export { FavsNavigation };
