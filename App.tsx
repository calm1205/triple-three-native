import React from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import { Description } from "./src/components/atoms";
import { Scores } from "./src/components/molecules";
import { TripleThree } from "./src/components/organisms/TripleThree";
import { GameOverModal } from "./src/components/organisms/GameOverModal";
import { COLOR } from "./src/utils/style";
import { useTripleThree } from "./src/hooks";

export default function App() {
  const { width, height } = Dimensions.get("window");
  // const {
  //   score,
  //   bestScore,
  //   gameOver,
  //   adders,
  //   hands,
  //   squares,
  //   setGameOver,
  //   onClickNewGame,
  //   onClickAdder,
  //   onChangeHands,
  //   onClickAddButton,
  // } = useTripleThree();
  return (
    <ScrollView style={[styles.container]} showsVerticalScrollIndicator={false}>
      <GameOverModal />
      <View style={{ height }}>
        <View style={styles.top}>
          <View
            style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontSize: 30, color: COLOR.TEXT }}>TripleThree</Text>
          </View>
          <View style={{ flex: 3, alignItems: "flex-end", padding: 10 }}>
            <Scores
              score={100}
              bestScore={999}
              onPress={() => alert("new game")}
            />
          </View>
        </View>

        <View style={styles.main}>
          <TripleThree
            adders={[0, 3, 0, 0, 0, 0]}
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
        </View>
      </View>

      <View style={styles.bottom}>
        <Description />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  top: {
    height: "25%",
    paddingTop: 50,
    flexDirection: "row",
    // backgroundColor: "thistle",
  },
  main: {
    height: "75%",
  },
  bottom: {
    paddingHorizontal: 30,
  },
});
