import { useMemo } from "react";
// import { BaseTripleThreeProps } from "~/components/organisms/TripleThree";

// Scoreを扱うロジック
// type SquaresType = BaseTripleThreeProps["squares"];
type SquaresType = number[][];
const localStorageBestScore = Number(localStorage.getItem("best"));

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
    localStorage.setItem("bestScore", JSON.stringify(score));
  }
};

export const useScores = (squares: SquaresType) => {
  const score = useMemo(() => {
    const number = getScore(squares);
    return number;
  }, [squares]);

  const bestScore =
    localStorageBestScore > score ? localStorageBestScore : score;
  return { score, bestScore, getScore, updateBestScore };
};
