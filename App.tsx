import React from "react";
import { StyleSheet, View } from "react-native";
import { Square, BasicButton } from "./src/components/atoms";

export default function App() {
  return (
    <View style={styles.container}>
      <Square number={5} />
      <BasicButton text="sample" onPress={() => alert("press")} />
      <BasicButton
        text="disable"
        disabled={true}
        onPress={() => alert("press")}
      />
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
