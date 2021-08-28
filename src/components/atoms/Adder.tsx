import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useStandardSize } from "../../hooks";
import { COLOR, SIZE } from "../../utils/style";

type BaseAdderProps = {
  index: number;
  value: number;
  onPress: (index: number) => void;
};

export const Adder: React.FC<BaseAdderProps> = ({ index, value, onPress }) => {
  const size = useStandardSize() * 3.5;
  const onPressAdder = () => onPress(index);

  return (
    <TouchableOpacity
      style={[styles.container, { width: size, height: size }]}
      onPress={onPressAdder}
    >
      <Text style={styles.text}>{value === 0 || `+${value}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND,
    borderWidth: SIZE.border * 2,
    borderColor: COLOR.BORDER,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: COLOR.TEXT,
  },
});
