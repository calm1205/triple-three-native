import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLOR, SIZE } from "../../utils/style";

type BaseHandProps = {
  value: number;
};

export const Hand: React.FC<BaseHandProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>+{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZE.spacing * 8,
    height: SIZE.spacing * 8,
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
