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
  onPressAdder: () => void;
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
  return (
    <View style={{ flex: 1 }}>
      <View style={[{ flex: 2, flexDirection: "row" }, styles.top]}>
        <View style={{ flex: 2 }} />
        <View style={[{ flex: 6, flexDirection: "row" }, styles.rowAdder]}>
          {row_adders}
        </View>
      </View>

      <View style={[{ flex: 8, flexDirection: "row" }, styles.main]}>
        <View
          style={[
            {
              flex: 2,
              height: width + paddingSpacing * 2 + SIZE.boldBorder * 2,
            },
            styles.columnAdder,
          ]}
        >
          {column_adders}
        </View>
        <View style={[{ flex: 7 }, styles.nineSquare]}>
          <NineSquares values={squares} />
        </View>
      </View>

      <View style={[{ flex: 5 }, styles.bottom]}>
        <View style={{ flex: 5, alignItems: "flex-end" }}>
          <Hands values={[3, 9]} onPress={() => alert("change")} />
        </View>
        <View style={{ flex: 2, alignItems: "flex-end", paddingTop: 20 }}>
          <BasicButton
            width={100}
            height={100}
            text="Add"
            onPress={onPressAddButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    alignItems: "flex-end",
    // backgroundColor: "skyblue",
  },
  rowAdder: {
    paddingHorizontal: paddingSpacing,
    alignItems: "center",
    justifyContent: "space-around",
  },
  columnAdder: {
    paddingVertical: paddingSpacing,
    alignItems: "flex-end",
    justifyContent: "space-around",
    // backgroundColor: "red",
  },
  main: {
    // backgroundColor: "lavender",
  },
  nineSquare: {
    padding: paddingSpacing,
  },
  bottom: {
    flexDirection: "row",
    paddingRight: 10,
    // backgroundColor: "bisque",
  },
});
