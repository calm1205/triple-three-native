// Handsを扱うロジック
import { useState } from "react";
import { useRandomNumber } from "./";
import { BaseTripleThreeProps } from "../components/organisms/TripleThree";

type AdderType = BaseTripleThreeProps["adders"];
type HandsType = BaseTripleThreeProps["hands"];
type SetAddersType = React.Dispatch<React.SetStateAction<AdderType>>;
const AsyncStorageHans = JSON.parse(AsyncStorage.getItem("hands")!);

export const useHands = (adders: AdderType, setAdders: SetAddersType) => {
  const [hands, setHands] = useState<HandsType>(
    AsyncStorageHans || [useRandomNumber(), useRandomNumber()]
  );

  const onChangeHands = () => {
    setHands([hands[1], hands[0]]);
    const [adderIndex] = adders.flatMap((v, i) => (v !== 0 ? i : []));
    if (adderIndex) {
      const adderArray = [0, 0, 0, 0, 0, 0];
      adderArray[adderIndex] = hands[1];
      setAdders(adderArray);
    }
  };

  const drawNewHand: () => HandsType = () => {
    const newHands: HandsType = [hands[1], useRandomNumber()];
    setHands(newHands);
    return newHands;
  };

  return { hands, setHands, onChangeHands, drawNewHand };
};
