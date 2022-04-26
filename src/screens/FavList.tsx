import { SafeAreaView, StyleSheet } from "react-native";
import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { FavoriteService } from "../services/favorites.service";
import { PokemonService } from "../services/pokemon.service";
import { PokemonList } from "../components/PokemonList";
import useAuth from "../hooks/useAuth";
import { AppText } from "../components/AppText";
import { NotLogged } from "../components/NotLogged";

function FavList() {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const { user } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (user) {
        (async () => {
          const response = await FavoriteService.getPokemon();
          const resultList: any[] = [];
          for await (const id of response) {
            const pokemon = await PokemonService.getPokemonById(id);
            resultList.push({
              id: pokemon.id,
              name: pokemon.name,
              type: pokemon.types[0].type.name,
              order: pokemon.order,
              image: pokemon.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemonList(resultList);
        })();
      }
    }, [user])
  );

  return user ? (
    <SafeAreaView>
      <PokemonList list={pokemonList} />
    </SafeAreaView>
  ) : (
    <NotLogged />
  );
}

export { FavList };
