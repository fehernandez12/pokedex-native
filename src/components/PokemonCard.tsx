import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getColorByType } from "../utils/getColorByType";

function PokemonCard(props: any) {
  const { pokemon } = props;
  const navigation: any = useNavigation();

  const bgStyles = {
    backgroundColor: getColorByType(pokemon.type),
    ...styles.bgStyles,
  };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Text style={styles.number}>
              #{`${pokemon.id}`.padStart(3, "0")}
            </Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 3,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    textTransform: "capitalize",
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
});

export { PokemonCard };