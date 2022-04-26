import { View, StyleSheet } from "react-native";
import React from "react";
import { AppText } from "../../AppText";

function ItemMenu(props: any) {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <AppText bold={true}>{title}:</AppText>
      <AppText>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  itemMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});

export { ItemMenu };
