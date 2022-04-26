import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getColorByType } from "../utils/getColorByType";
import { AppText } from "./AppText";

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
            <AppText style={styles.name}>{pokemon.name}</AppText>
            <AppText style={styles.number}>
              #{`${pokemon.id}`.padStart(3, "0")}
            </AppText>
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
    padding: 10,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
  },
  image: {
    position: "absolute",
    bottom: -15,
    right: 12,
    width: 100,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
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
