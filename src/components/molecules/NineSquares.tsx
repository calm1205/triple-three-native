import React from "react";
import { StyleSheet, View } from "react-native";
import { Square } from "../atoms";
import { COLOR, SIZE } from "../../utils/style";
import { useStandardSize } from "../../hooks";

type BaseNineSquaresProps = {
  values: number[][];
};

export const NineSquares: React.FC<BaseNineSquaresProps> = ({ values }) => {
  const width = useStandardSize() * 14;
  const height = width + SIZE.boldBorder * 2;
  return (
    <View style={[styles.container, { height, width: height }]}>
      {values.map((rowValues, i) => {
        return (
          <View style={styles.row} key={`row_${i}`}>
            {rowValues.map((v, j) => {
              return (
                <View style={{ flex: 1 }} key={`square_${i}_${j}`}>
                  <Square flex={1} value={v} />
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: SIZE.boldBorder,
    borderColor: COLOR.BORDER,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
});
