import { SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { PokemonService } from "../services/pokemon.service";
import { PokemonList } from "../components/PokemonList";
import { NavigationContainerRefContext } from "@react-navigation/native";

function PokeList() {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  useEffect(() => {
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await PokemonService.getPokemons(nextUrl);
      setNextUrl(response.next);
      const resultList: any[] = [];
      for await (const pokemonItem of response.results) {
        const pokemon = await PokemonService.getPokemon(pokemonItem.url);
        resultList.push({
          id: pokemon.id,
          name: pokemon.name,
          type: pokemon.types[0].type.name,
          order: pokemon.order,
          image: pokemon.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemonList([...pokemonList, ...resultList]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        list={pokemonList}
        loadPokemon={loadPokemon}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}

export { PokeList };
