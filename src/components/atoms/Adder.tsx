import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLOR } from "../../utils/style";

type BaseAdderProps = {
  index: number;
  value: number;
  onPress: () => void;
};

export const Adder: React.FC<BaseAdderProps> = ({ index, value, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      data-index={index}
    >
      <Text style={styles.text}>{value === 0 || `+${value}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: COLOR.BACKGROUND,
    borderWidth: 3,
    borderColor: COLOR.BORDER,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: COLOR.TEXT,
  },
});
