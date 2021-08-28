import React from "react";
import { StyleSheet, View } from "react-native";
import { NineSquares, Hands } from "../molecules";
import { useSplitAdders, useStandardSize } from "../../hooks";
import { SIZE } from "../../utils/style";
import { BasicButton } from "../atoms";

export type BaseTripleThreeProps = {
  adders: number[];
  squares: number[][];
  hands: [number, number];
  buttonDisable: boolean;
  onPressAdder: (index: number) => void;
  onPressChangeHands: () => void;
  onPressAddButton: () => void;
};

const paddingSpacing = 20;
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
  const width = useStandardSize() * 14;
  const height = width + paddingSpacing * 2 + SIZE.boldBorder * 2;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top}>
        <View style={{ flex: 2 }} />
        <View style={styles.rowAdder}>{row_adders}</View>
      </View>

      <View style={styles.main}>
        <View style={[{ height }, styles.columnAdder]}>{column_adders}</View>
        <View style={styles.nineSquare}>
          <NineSquares values={squares} />
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.hands}>
          <Hands values={hands} onPress={onPressChangeHands} />
        </View>
        <View style={styles.button}>
          <BasicButton
            width={100}
            height={100}
            text="Add"
            disabled={buttonDisable}
            onPress={onPressAddButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: { flex: 2, flexDirection: "row", alignItems: "flex-end" },
  rowAdder: {
    flex: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: paddingSpacing,
  },
  columnAdder: {
    flex: 2,
    paddingVertical: paddingSpacing,
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  main: { flex: 8, flexDirection: "row" },
  nineSquare: { flex: 7, padding: paddingSpacing },
  bottom: { flex: 5, flexDirection: "row", paddingRight: 10 },
  hands: { flex: 5, alignItems: "flex-end" },
  button: { flex: 2, alignItems: "flex-end", paddingTop: 20 },
});
