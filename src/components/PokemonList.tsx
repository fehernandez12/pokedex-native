import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import { PokemonCard } from "./PokemonCard";

function PokemonList(props: any) {
  const { list, loadPokemon, isNext } = props;
  const loadMore = () => {
    loadPokemon();
  };
  return (
    <FlatList
      data={list}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#aeaeae"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: Platform.OS === "ios" ? 0 : 30,
    marginTop: 50,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "ios" ? 60 : 90,
  },
});

export { PokemonList };
