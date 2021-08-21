import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Hand, ChangeIcon } from "../atoms";
import { COLOR } from "../../utils/style";

type BaseHandsProps = {
  values: [number, number];
  onPress: () => void;
};

export const Hands: React.FC<BaseHandsProps> = ({ values, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.change}>
        <ChangeIcon width={50} height={50} />
      </View>
      <View style={styles.main}>
        <Hand value={values[0]} />
      </View>
      <View style={styles.sub}>
        <Hand value={values[1]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  change: {
    position: "absolute",
    top: 30,
    right: 30,
  },
  main: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  sub: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
