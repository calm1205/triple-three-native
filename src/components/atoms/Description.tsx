import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLOR } from "../../utils/style";

const descriptions = [
  "The score is the sum of nine numbers.",
  "You can add hand numbers to columns or rows.",
  "Numbers that are multiples of 3 are not included in the score.",
  "Game over when the number of multiples of 3 becomes 3 or more.",
] as const;

export const Description: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hr}></View>
      <Text style={styles.h1}>How To Play</Text>
      <View>
        {descriptions.map((description, i) => (
          <Text
            style={styles.text}
            children={description}
            key={`description_${i}`}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  hr: {
    width: "100%",
    height: 3,
    backgroundColor: COLOR.BORDER,
  },
  h1: {
    fontSize: 20,
    color: COLOR.TEXT,
    marginVertical: 10,
  },
  text: {
    color: COLOR.TEXT,
  },
});
