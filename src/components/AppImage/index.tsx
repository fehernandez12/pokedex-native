import { View, Image, StyleSheet, Platform } from "react-native";
import React from "react";

function AppImage(props: any) {
  const { source, shadow, style, containerStyles } = props;
  const getImageStyles = () => {
    if (shadow) {
      return styles.imageShadow;
    }
    return styles.image;
  };

  const getContainerStyles = () => {
    if (shadow) {
      let style = {
        ...styles.containerShadow,
        backgroundColor: containerStyles.backgroundColor,
      };
      console.log(style);
      return style;
    }
    return styles.container;
  };

  return Platform.OS === "android" ? (
    <View style={[getContainerStyles()]}>
      <Image source={source} style={[getImageStyles(), style]} />
    </View>
  ) : (
    <Image source={source} style={[getImageStyles(), style]} />
  );
}

const styles = StyleSheet.create({
  image: {},
  imageShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
  },
  container: {
    flex: 1,
  },
  containerShadow: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
  },
});

export { AppImage };
