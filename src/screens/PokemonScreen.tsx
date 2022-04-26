import { ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import AppLoading from "expo-app-loading";
import { Pokemon } from "pokenode-ts";
import { PokemonService } from "../services/pokemon.service";
import { Header } from "../components/Pokemon/Header";
import { TypeList } from "../components/Pokemon/TypeList";
import { Stats } from "../components/Pokemon/Stats";
import { Favorite } from "../components/Pokemon/Favorite";
import useAuth from "../hooks/useAuth";

function PokemonScreen(props: any) {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

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
    setLoading(true);
    getPokemon();
    setLoading(false);
  }, []);

  if (!pokemon) {
    return null;
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        user && pokemon ? <Favorite id={pokemon!.id} /> : undefined,
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
  }, [navigation, params, pokemon, user]);

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
