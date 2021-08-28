import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useStandardSize } from "../../hooks";
import { COLOR, SIZE } from "../../utils/style";

type BaseScoreProps = {
  label: string;
  value: number;
};

export const Score: React.FC<BaseScoreProps> = ({ label, value }) => {
  const size = useStandardSize();
  return (
    <View style={[styles.container, { width: size * 5, height: size * 5 }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BACKGROUND,
    borderWidth: SIZE.border,
    borderColor: COLOR.BORDER,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLOR.PRIMARY,
  },
  text: {
    fontSize: 20,
    color: COLOR.TEXT,
  },
});
