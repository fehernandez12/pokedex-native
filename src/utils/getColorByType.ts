import { POKEMON_TYPE_COLORS } from "./constants";

const getColorByType = (type: string) => {
  return POKEMON_TYPE_COLORS[type.toLowerCase() as keyof typeof POKEMON_TYPE_COLORS];
}

export { getColorByType };