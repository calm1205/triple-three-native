import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLOR, SIZE } from "../../utils/style";

type BaseSquareProps = {
  value: number;
  flex: number;
};

export const Square: React.FC<BaseSquareProps> = ({ value, flex }) => {
  return (
    <View style={[{ flex }, styles.container, value % 3 === 0 && styles.error]}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND,
    borderWidth: 3,
    borderColor: COLOR.BORDER,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    backgroundColor: COLOR.ERROR,
  },
  text: {
    fontSize: 25,
    color: COLOR.TEXT,
  },
});
