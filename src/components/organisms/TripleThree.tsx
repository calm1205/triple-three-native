import React from "react";
import { StyleSheet, View } from "react-native";
import { NineSquares, Hands } from "../molecules";
import { useSplitAdders } from "../../hooks/useSplitAdders";
import { COLOR } from "../../utils/style";

type BaseTripleThreeProps = {
  adders: number[];
  squares: number[][];
  hands: [number, number];
  buttonDisable: boolean;
  onPressAdder: () => void;
  onPressChangeHands: () => void;
  onPressAddButton: () => void;
};

export const TripleThree: React.FC<BaseTripleThreeProps> = ({
  adders,
  squares,
  hands,
  buttonDisable,
  onPressAdder,
  onPressChangeHands,
  onPressAddButton,
}) => {
  const { row_adders, column_adders } = useSplitAdders(adders, onPressAdder);

  return (
    <View style={styles.container}>
      <View>
        <NineSquares values={squares} />
      </View>
      <View>
        <Hands values={[3, 9]} onPress={() => alert("change")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
