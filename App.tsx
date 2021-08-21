import React from "react";
import { StyleSheet, View } from "react-native";
import { Description } from "./src/components/atoms";
import { TripleThree } from "./src/components/organisms/TripleThree";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mt} />
      <TripleThree
        adders={[2, 3]}
        squares={[
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ]}
        hands={[4, 5]}
        buttonDisable={false}
        onPressAdder={() => alert("adder")}
        onPressAddButton={() => alert("add button")}
        onPressChangeHands={() => alert("change hand")}
      />
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
