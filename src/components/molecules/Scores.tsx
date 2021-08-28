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

export const Scores: React.FC<BaseScoresProps> = ({
  score,
  bestScore,
  onPress,
}) => {
  const size = useStandardSize();
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Score label={"SCORE"} value={score} />
        <View style={{ width: size }} />
        <Score label={"BEST"} value={bestScore} />
      </View>
      <View style={{ paddingTop: 10 }}>
        <BasicButton
          height={30}
          width={size * 11}
          text={"NEW GAME"}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
