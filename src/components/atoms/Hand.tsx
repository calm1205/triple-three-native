import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLOR, SIZE } from "../../utils/style";

type BaseHandProps = {
  value: number;
  width?: number;
  height?: number;
};

export const Hand: React.FC<BaseHandProps> = ({
  value,
  width = 80,
  height = 80,
}) => {
  return (
    <View style={[styles.container, { width, height }]}>
      <Text style={styles.text}>+{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND,
    borderWidth: SIZE.border * 2,
    borderColor: COLOR.BORDER,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: COLOR.TEXT,
  },
});
