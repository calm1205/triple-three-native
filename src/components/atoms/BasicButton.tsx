import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLOR } from "../../utils/style";

type BaseButtonProps = {
  text: string;
  disabled?: boolean;
  onPress: () => void;
};

export const BasicButton: React.FC<BaseButtonProps> = ({
  text,
  disabled = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
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
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLOR.PRIMARY,
  },
  disable: {
    color: COLOR.BORDER,
  },
});
