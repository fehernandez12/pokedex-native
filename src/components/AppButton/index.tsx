import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
import React from "react";
import { Pressable } from "react-native";
import { textStyles } from "../../utils/constants";

function AppButton(props: any) {
  const { children, style, onPress } = props;
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  let bold = style && style["fontWeight"] && style["fontWeight"] === "bold";

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Pressable
      style={[bold ? styles.textBold : styles.text, style]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
}

const styles = textStyles;

export { AppButton };
