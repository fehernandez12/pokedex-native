import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils/constants";

export class FavoriteService {
  static async addPokemon(pokemonId: number) {
    try {
      const favorites = await this.getPokemon();
      favorites.push(pokemonId);
      await AsyncStorage.setItem(
        FAVORITE_STORAGE,
        JSON.stringify(
          favorites
        )
      );
    } catch (error) {
      throw error;
    }
  }

  static async isFavorite(pokemonId: number): Promise<boolean> {
    const favorites = await this.getPokemon();
    return favorites.includes(pokemonId);
  }

  static removeDuplicates(arr: any[]): any[] {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  static async removeFavorite(pokemonId: number) {
    try {
      const favorites = await this.getPokemon();
      let newFavorites = favorites.filter(id => id !== pokemonId);
      await AsyncStorage.setItem(
        FAVORITE_STORAGE,
        JSON.stringify(
          newFavorites
        )
      );
    } catch (error) {
      throw error;
    }
  }

  static async getPokemon(): Promise<any[]> {
    try {
      const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
      return JSON.parse(response || '[]');
    } catch (error) {
      throw error;
    }
  }
}