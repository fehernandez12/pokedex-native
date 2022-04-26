import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FavoriteService } from "../../../services/favorites.service";

function Favorite(props: any) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState<boolean | undefined>(undefined);
  const [reloadCheck, setReloadcheck] = useState(false);
  const iconColor = isFavorite ? "#fc0035" : "#fafbfc";

  useEffect(() => {
    (async () => {
      try {
        const response = await FavoriteService.isFavorite(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    setReloadcheck(!reloadCheck);
  };

  const addFavorite = async () => {
    try {
      await FavoriteService.addPokemon(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await FavoriteService.removeFavorite(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Icon
      name="favorite"
      color={iconColor}
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={styles.icon}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
  },
});

export { Favorite };
