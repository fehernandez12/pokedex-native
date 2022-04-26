import { View, StyleSheet } from "react-native";
import React from "react";
import { AppText } from "../../AppText";

function ItemMenu(props: any) {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <AppText style={styles.title}>{title}:</AppText>
      <AppText style={{ fontWeight: undefined }}>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  itemMenu: {
    fontWeight: undefined,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  title: {
    fontWeight: "bold",
  },
});

export { ItemMenu };
