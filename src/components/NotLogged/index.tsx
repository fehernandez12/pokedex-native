import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppText } from "../AppText";
import { AppButton } from "../AppButton";

function NotLogged() {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <AppText style={styles.title} bold={true}>
        ¡No has iniciado sesión!
      </AppText>
      <AppButton onPress={() => navigation.navigate("Account", {})}>
        <AppText style={styles.text}>
          Inicia sesión para ver tus favoritos.
        </AppText>
      </AppButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
  },
  text: {
    fontSize: 18,
    color: "#007AFF",
  },
});

export { NotLogged };
