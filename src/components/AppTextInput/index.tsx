import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
import React from "react";
import { TextInput } from "react-native";
import { textStyles } from "../../utils/constants";

function AppTextInput(props: any) {
  const {
    style,
    placeholder,
    autoCapitalize,
    value,
    onChangeText,
    secureTextEntry,
  } = props;
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  let bold = style && style["fontWeight"] && style["fontWeight"] === "bold";

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TextInput
      style={[bold ? styles.textBold : styles.text, style]}
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry ? true : false}
    />
  );
}

const styles = textStyles;

export { AppTextInput };
