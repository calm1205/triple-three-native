//  GameOverを扱うロジック
import { useState } from "react";
import { BaseTripleThreeProps } from "../components/organisms/TripleThree";

type SquaresType = BaseTripleThreeProps["squares"];

const isGameOver = (squares: SquaresType) => {
  let counter = 0;
  const squaresArray = squares.flatMap((_) => _);
  squaresArray.forEach((v) => {
    if (v % 3 === 0) counter++;
  });
  return counter >= 3 ? true : false;
};

export const useGameOver = (squares: SquaresType) => {
  const [gameOver, setGameOver] = useState(isGameOver(squares));
  return { gameOver, setGameOver, isGameOver };
};
