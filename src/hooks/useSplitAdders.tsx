// adderを縦横に分割するロジック
import React from "react";
import { Adder } from "../components/atoms";

export const useSplitAdders = (adders: number[], onPress: () => void) => {
  const row_adders: JSX.Element[] = [];
  const column_adders: JSX.Element[] = [];

  adders.forEach((adder, index) => {
    const adderElement = (
      <Adder
        value={adder}
        onPress={onPress}
        index={index}
        key={`adder_${index}`}
      />
    );
    if (index <= 2) {
      row_adders.push(adderElement);
    } else {
      column_adders.push(adderElement);
    }
  });

  return { row_adders, column_adders };
};
