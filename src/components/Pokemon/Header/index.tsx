import React from "react";
import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import { getColorByType } from "../../../utils/getColorByType";
import { AppText } from "../../AppText";

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
          <AppText style={styles.name} bold={true}>
            {name}
          </AppText>
          <AppText style={styles.order} bold={true}>
            #{`${order}`.padStart(3, "0")}
          </AppText>
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
    width: 275,
    height: 275,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.85,
    shadowRadius: 7.84,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  name: {
    color: "#f1f2f3",
    fontSize: 30,
    textTransform: "capitalize",
  },
  order: {
    color: "#eaebec",
    fontSize: 30,
    textTransform: "capitalize",
  },
});

export { Header };
