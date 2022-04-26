import { StyleSheet } from "react-native";

export const API_HOST: string = "https://pokeapi.co/api/v2";

export const POKEMON_TYPE_COLORS = {
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#FA6C6C",
  water: "#6890F0",
  grass: "#48CFB2",
  electric: "#FFCE4B",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
};

interface StatsMap {
  [key: string]: string;
}

export const POKEMON_STATS: StatsMap = {
  'hp': "HP",
  'attack': "Attack",
  'defense': "Defense",
  'special-attack': "Sp. Attack",
  'special-defense': "Sp. Defense",
  'speed': "Speed",
}

export const textStyles = StyleSheet.create({
  text: {
    fontFamily: "Nunito_400Regular",
  },
  textBold: {
    fontFamily: "Nunito_700Bold",
  },
});

export const FAVORITE_STORAGE = "favorites";