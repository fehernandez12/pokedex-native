import { API_HOST } from "../utils/constants";

export class PokemonService {
  static async getPokemons(endPoint: string) {
    try {
      const url = `${API_HOST}/pokemon?offset=0&limit=30`;
      const response = await fetch(endPoint || url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getPokemonById(id: string | number) {
    try {
      const url = `${API_HOST}/pokemon/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  static async getPokemon(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
