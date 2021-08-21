import React from "react";
import { StyleSheet, View } from "react-native";
import { Description } from "./src/components/atoms";
import { NineSquares } from "./src/components/molecules";

const defaultValues = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

export default function App() {
  return (
    <View style={styles.container}>
      <NineSquares values={defaultValues} />
      <View style={styles.mt} />
      <Description />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  mt: {
    marginTop: 70,
  },
});
