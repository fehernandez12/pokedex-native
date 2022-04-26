import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
import React from "react";
import { Text } from "react-native";
import { textStyles } from "../../utils/constants";

function AppText(props: any) {
  const { children, style } = props;

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  let bold = style && style["fontWeight"] && style["fontWeight"] === "bold";

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text style={[bold ? styles.textBold : styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = textStyles;

export { AppText };
