// TripleThreeのロジック
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BaseTripleThreeProps } from "../components/organisms/TripleThree";
import { useRandomNumber, useHands, useScores, useGameOver } from "./";

type SquaresType = BaseTripleThreeProps["squares"];

export const useTripleThree = () => {
  // ランダムな二次元配列を生成
  const initialSquares: SquaresType = [...Array(3)].map(() =>
    [...Array(3)].map(() => useRandomNumber())
  );

  const getAsyncStorage = async (key: string, callback: any) => {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const jsonValue = JSON.parse(value);
      callback(jsonValue);
    }
  };
  // const AsyncStorageSquares = AsyncStorage.getItem("squares");
  const [squares, setSquares] = useState<SquaresType>(initialSquares);
  getAsyncStorage("squares", setSquares);

  const [adders, setAdders] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const { score, bestScore, updateBestScore } = useScores(squares);
  const { gameOver, setGameOver, isGameOver } = useGameOver(squares);
  const { hands, setHands, onChangeHands, drawNewHand } = useHands(
    adders,
    setAdders
  );

  const onPressAdder = (index: number) => {
    const adderIndex = index;
    const adderArray = [0, 0, 0, 0, 0, 0];
    adderArray[adderIndex] = hands[0];
    setAdders(adderArray);
  };

  const addMainHandToSquares = (hand: number, index: number) => {
    const newSquares = squares.map((row, i) =>
      row.map((value, j) => {
        if (index <= 2 && index === j && squares[i][j] % 3 != 0)
          return squares[i][j] + hand;
        if (index > 2 && index - 3 === i && squares[i][j] % 3 != 0)
          return squares[i][j] + hand;
        return value;
      })
    );
    return newSquares;
  };

  const onPressAddButton = () => {
    const [adderIndex] = adders.flatMap((v, i) => (v !== 0 ? i : []));
    if (adderIndex !== undefined) {
      setAdders([0, 0, 0, 0, 0, 0]);
      const newSquares = addMainHandToSquares(hands[0], adderIndex);
      updateBestScore(newSquares, bestScore);
      setSquares(newSquares);
      const newHands = drawNewHand();
      AsyncStorage.setItem("squares", JSON.stringify(newSquares));
      AsyncStorage.setItem("hands", JSON.stringify(newHands));
      setGameOver(isGameOver(newSquares));
    } else {
      alert("HandをAdderにセットしてください。");
    }
  };

  const onPressNewGame = async () => {
    await AsyncStorage.removeItem("squares");
    await AsyncStorage.removeItem("hands");
    setAdders([0, 0, 0, 0, 0, 0]);
    setSquares(initialSquares);
    setHands([useRandomNumber(), useRandomNumber()]);
    setGameOver(false);
  };

  return {
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
  };
};
