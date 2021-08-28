import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const useStandardSize = () => Math.floor(width * 0.05);
