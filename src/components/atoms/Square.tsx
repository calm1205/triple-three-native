import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLOR } from "../../utils/style";

type BaseSquareProps = {
  number: number;
};

export const Square: React.FC<BaseSquareProps> = ({ number }) => {
  const multipleOfThree = number % 3 === 0;
  return (
    <View style={[styles.container, multipleOfThree && styles.error]}>
      <Text style={styles.text}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
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
    fontSize: 30,
    color: COLOR.TEXT,
  },
});
