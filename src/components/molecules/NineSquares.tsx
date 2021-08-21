import React from "react";
import { StyleSheet, View } from "react-native";
import { Square } from "../atoms";
import { COLOR } from "../../utils/style";

type BaseNineSquaresProps = {
  values: number[][];
};

export const NineSquares: React.FC<BaseNineSquaresProps> = ({ values }) => {
  return (
    <View style={styles.container}>
      {values.map((rowValues, i) => {
        return (
          <View style={styles.row}>
            {rowValues.map((v, j) => {
              return <Square value={v} key={`${i}_${j}`} />;
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    backgroundColor: COLOR.BACKGROUND,
    borderWidth: 5,
    borderColor: COLOR.BORDER,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
});
