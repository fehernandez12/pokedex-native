import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";
import { getColorByType } from "../../../utils/getColorByType";

function Header(props: any) {
  const { name, order, image, type } = props;

  const bgStyles = [{ backgroundColor: getColorByType(type), ...styles.bg }];

  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.content}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, "0")}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#f1f2f3",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  order: {
    color: "#eaebec",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

export { Header };
