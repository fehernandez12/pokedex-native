import { StyleSheet, View, Text, Button } from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { FavoriteService } from "../../../services/favorites.service";
import useAuth from "../../../hooks/useAuth";
import { AppText } from "../../AppText";
import { AppButton } from "../../AppButton";
import { ItemMenu } from "../ItemMenu";

function UserData() {
  const { user, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await FavoriteService.getPokemon();
          setTotal(response.length);
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <AppText style={styles.title}>Bienvenido,</AppText>
        <AppText style={styles.title}>{`${user!.firstName} ${
          user!.lastName
        }`}</AppText>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu
          title="Nombre"
          text={`${user!.firstName} ${user!.lastName}`}
        />
        <ItemMenu title="Username" text={`${user!.username}`} />
        <ItemMenu title="Email" text={`${user!.email}`} />
        <ItemMenu title="Total de favoritos" text={`${total} Pokémon`} />
      </View>
      <AppButton onPress={logout} style={styles.logoutBtn}>
        <AppText style={{ fontWeight: undefined, color: "white" }}>
          Desconectarse
        </AppText>
      </AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 100,
  },
  titleBlock: {
    marginBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  logoutBtn: {
    fontWeight: undefined,
    backgroundColor: "#fc0057",
    marginHorizontal: 100,
    padding: 7,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { UserData };
