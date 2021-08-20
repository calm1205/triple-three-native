import React from "react";
import { StyleSheet, View } from "react-native";
import { Square } from "./src/components/atoms/Square";

export default function App() {
  return (
    <View style={styles.container}>
      <Square number={5} />
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
});
