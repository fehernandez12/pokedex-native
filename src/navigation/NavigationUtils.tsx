import { Image } from "react-native";
export default function renderPokeBall() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{
        width: 75,
        height: 75,
        top: -18,
      }}
    />
  );
}
