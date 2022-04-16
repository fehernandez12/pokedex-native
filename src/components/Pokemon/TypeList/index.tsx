import { Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { PokemonType } from "pokenode-ts";
import { getColorByType } from "../../../utils/getColorByType";

function TypeList(props: any) {
  const getBadgeStyle = (type: string) => {
    return {
      backgroundColor: getColorByType(type),
      ...styles.badgeStyles,
    };
  };

  const { types } = props;
  return (
    <SafeAreaView style={styles.typesContainer}>
      {types.map((type: PokemonType) => (
        <Text style={getBadgeStyle(type.type.name)} key={type.slot}>
          {type.type.name}
        </Text>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  typesContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeStyles: {
    margin: 5,
    top: 20,
    width: 90,
    textAlign: "center",
    textTransform: "capitalize",
    padding: 5,
    borderRadius: 5,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 1,
    color: "#f1f2f3",
  },
});

export { TypeList };
