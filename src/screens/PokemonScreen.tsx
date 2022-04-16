import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Pokemon } from "pokenode-ts";
import { PokemonService } from "../services/pokemon.service";
import { Header } from "../components/Pokemon/Header";
import { TypeList } from "../components/Pokemon/TypeList";
import { Stats } from "../components/Pokemon/Stats";

function PokemonScreen(props: any) {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const [loading, setLoading] = useState(false);

  const getPokemon = async () => {
    try {
      const response: Pokemon = await PokemonService.getPokemonById(
        params.id.toString()
      );
      setPokemon(response);
    } catch (error) {
      navigation.goBack();
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    setLoading(true);
    getPokemon();
    setLoading(false);
  }, []);

  if (!pokemon) {
    return null;
  }

  return (
    <ScrollView>
      {!loading && (
        <>
          <Header
            name={pokemon.name}
            order={pokemon.id}
            image={pokemon.sprites?.other["official-artwork"].front_default}
            type={pokemon.types ? pokemon.types[0].type.name : ""}
          />
          <TypeList types={pokemon.types ? pokemon.types : []} />
          <Stats stats={pokemon.stats ? pokemon.stats : []} />
        </>
      )}
    </ScrollView>
  );
}

export { PokemonScreen };
