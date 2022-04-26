import { View, StyleSheet } from "react-native";
import React from "react";
import { PokemonStat } from "pokenode-ts";
import { POKEMON_STATS } from "../../../utils/constants";
import { AppText } from "../../AppText";

function Stats(props: any) {
  const { stats } = props;

  const getBaseStatTotal = () => {
    return stats.reduce((acc: number, stat: PokemonStat) => {
      return acc + stat.base_stat;
    }, 0);
  };

  const totalBarStyles = (num: number) => {
    let percentage = getStatAsPercentage(num, 720);
    return {
      backgroundColor: getBgColor(percentage),
      width: `${percentage}%`,
    };
  };

  const barStyles = (stat: PokemonStat) => {
    let percentage = getStatAsPercentage(stat.base_stat);
    return {
      backgroundColor: getBgColor(percentage),
      width: `${percentage}%`,
    };
  };

  const getBgColor = (stat: number) => {
    if (stat <= 28) {
      return "#ff3e3e";
    } else if (stat > 28 && stat < 35) {
      return "#f08700";
    } else if (stat >= 35 && stat < 40) {
      return "#efca08";
    } else if (stat >= 40) {
      return "#6eeb83";
    } else {
      return "#000000";
    }
  };

  const getStatAsPercentage = (stat: number, highest: number = 255) => {
    return (stat / highest) * 100;
  };

  return (
    <View style={styles.content}>
      <AppText style={styles.title} bold={true}>
        Base stats
      </AppText>
      {stats.map((stat: PokemonStat) => (
        <View style={styles.block} key={stat.stat.name}>
          <View style={styles.blockTitle}>
            <AppText style={styles.statName}>
              {POKEMON_STATS[stat.stat.name]}
            </AppText>
          </View>
          <View style={styles.blockInfo}>
            <AppText style={styles.number} bold={true}>
              {stat.base_stat}
            </AppText>
            <View style={styles.barBg}>
              <View style={[styles.bar, barStyles(stat)]} />
            </View>
          </View>
        </View>
      ))}
      <View style={styles.block}>
        <View style={styles.blockTitle}>
          <AppText style={styles.statName}>Total</AppText>
        </View>
        <View style={styles.blockInfo}>
          <AppText style={styles.number}>{getBaseStatTotal()}</AppText>
          <View style={styles.barBg}>
            <View style={[styles.bar, totalBarStyles(getBaseStatTotal())]} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  barBg: {
    backgroundColor: "#dedfe0",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});

export { Stats };
