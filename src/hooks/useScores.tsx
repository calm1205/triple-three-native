import { useMemo } from "react";
import { BaseTripleThreeProps } from "../components/organisms/TripleThree";

// Scoreを扱うロジック
type SquaresType = BaseTripleThreeProps["squares"];
const AsyncStorageBestScore = Number(AsyncStorage.getItem("best"));

const getScore = (squares: SquaresType) => {
  let score = 0;
  const squaresArray = squares.flatMap((_) => _);
  squaresArray.forEach((v) => {
    if (!(v % 3 === 0)) score += v;
  });
  return score;
};

const updateBestScore = (squares: SquaresType, best: number) => {
  const score = getScore(squares);
  if (score > best) {
    AsyncStorage.setItem("bestScore", JSON.stringify(score));
  }
};

export const useScores = (squares: SquaresType) => {
  const score = useMemo(() => {
    const number = getScore(squares);
    return number;
  }, [squares]);

  const bestScore =
    AsyncStorageBestScore > score ? AsyncStorageBestScore : score;
  return { score, bestScore, getScore, updateBestScore };
};
