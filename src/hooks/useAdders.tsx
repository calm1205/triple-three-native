import { BaseTripleThreeProps } from "../components/organisms/TripleThree";

type HandsType = BaseTripleThreeProps["hands"];
type AddersType = BaseTripleThreeProps["adders"];

// TripleThreeでAdderを扱うロジック
export const useAdders = (
  hands: HandsType,
  setAdders: (_: AddersType) => void
) => {
  const onClickAdder = (event: React.MouseEvent) => {
    const adderElement = event.target as HTMLDivElement;
    const adderIndex = Number(adderElement.getAttribute("data-index"));
    const adderArray = [0, 0, 0, 0, 0, 0];
    adderArray[adderIndex] = hands[0];
    setAdders(adderArray);
  };

  return { onClickAdder };
};
