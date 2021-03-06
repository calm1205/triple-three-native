import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLOR } from "../../utils/style";

type BaseButtonProps = {
  text: string;
  width?: number;
  height?: number;
  disabled?: boolean;
  onPress: () => void;
};

export const BasicButton: React.FC<BaseButtonProps> = ({
  text,
  width = 100,
  height = 50,
  disabled = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { width, height }]}
      onPress={() => disabled || onPress()}
    >
      <Text style={[styles.text, disabled && styles.disable]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    backgroundColor: COLOR.BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    color: COLOR.PRIMARY,
  },
  disable: {
    color: COLOR.BORDER,
  },
});
