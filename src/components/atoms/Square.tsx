import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
    backgroundColor: "#27292B",
    borderWidth: 3,
    borderColor: "#37383B",
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    backgroundColor: "#FA8072",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
});
