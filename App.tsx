import React from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import { Description } from "./src/components/atoms";
import { Scores } from "./src/components/molecules";
import { TripleThree } from "./src/components/organisms/TripleThree";
import { GameOverModal } from "./src/components/organisms/GameOverModal";
import { COLOR } from "./src/utils/style";
import { useTripleThree } from "./src/hooks";

export default function App() {
  const { height } = Dimensions.get("window");
  const {
    score,
    bestScore,
    gameOver,
    adders,
    hands,
    squares,
    onPressNewGame,
    onPressAdder,
    onChangeHands,
    onPressAddButton,
  } = useTripleThree();

  const [open, setOpen] = React.useState(gameOver);
  React.useEffect(() => setOpen(gameOver), [gameOver]);
  return (
    <ScrollView style={[styles.container]} showsVerticalScrollIndicator={false}>
      <GameOverModal
        open={open}
        score={score}
        setState={setOpen}
        onPress={onPressNewGame}
      />
      <View style={{ height }}>
        <View style={styles.top}>
          <View style={styles.title}>
            <Text style={{ fontSize: 30, color: COLOR.TEXT }}>TripleThree</Text>
          </View>
          <View style={styles.score}>
            <Scores
              score={score}
              bestScore={bestScore}
              onPress={onPressNewGame}
            />
          </View>
        </View>

        <View style={styles.main}>
          <TripleThree
            adders={adders}
            squares={squares}
            hands={hands}
            buttonDisable={gameOver}
            onPressAdder={onPressAdder}
            onPressAddButton={onPressAddButton}
            onPressChangeHands={onChangeHands}
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
  container: { backgroundColor: "black" },
  top: { height: "25%", paddingTop: 50, flexDirection: "row" },
  title: { flex: 2, alignItems: "center", justifyContent: "center" },
  score: { flex: 3, alignItems: "flex-end", padding: 10 },
  main: { height: "75%" },
  bottom: { paddingHorizontal: 30 },
});
