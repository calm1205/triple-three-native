// ランダムな整数を生成
const INITIAL_VALUES = [1, 2, 4, 5, 7, 8];
export const useRandomNumber = () => {
  return INITIAL_VALUES[Math.floor(Math.random() * INITIAL_VALUES.length)];
};
