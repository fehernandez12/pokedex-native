import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PokeList } from "../screens/PokeList";
import { PokemonScreen } from "../screens/PokemonScreen";

export type PokedexStackParamList = {
  Pokedex: undefined;
  Pokemon: { id: string };
};

const Stack = createStackNavigator<PokedexStackParamList>();

function PokeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokeList}
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}

export { PokeNavigation };
