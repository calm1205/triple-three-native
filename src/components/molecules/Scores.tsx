import React from "react";
import { StyleSheet, View } from "react-native";
import { BasicButton, Score } from "../atoms";
import { COLOR } from "../../utils/style";

type BaseScoresProps = {
  score: number;
  bestScore: number;
  onPress: () => void;
};

export const Scores: React.FC<BaseScoresProps> = ({ score, bestScore }) => {
  return (
    <View style={styles.container}>
      <View style={styles.score}>
        <Score label={"SCORE"} value={score} />
        <Score label={"BEST"} value={bestScore} />
      </View>
      <View>
        <BasicButton text={"NEW GAME"} onPress={() => alert("new game")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  score: {
    flexDirection: "row",
  },
});
