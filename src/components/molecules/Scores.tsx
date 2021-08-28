import React from "react";
import { StyleSheet, View } from "react-native";
import { BasicButton, Score } from "../atoms";
import { COLOR } from "../../utils/style";
import { useStandardSize } from "../../hooks";

type BaseScoresProps = {
  score: number;
  bestScore: number;
  onPress: () => void;
};

export const Scores: React.FC<BaseScoresProps> = ({ score, bestScore }) => {
  const size = useStandardSize();
  return (
    <View style={styles.container}>
      <View style={styles.score}>
        <Score label={"SCORE"} value={score} />
        <View style={{ width: size }} />
        <Score label={"BEST"} value={bestScore} />
      </View>
      <View style={{ paddingTop: 10 }}>
        <BasicButton
          height={30}
          width={size * 11}
          text={"NEW GAME"}
          onPress={() => alert("new game")}
        />
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
