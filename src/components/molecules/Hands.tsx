import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Hand, ChangeIcon } from "../atoms";
import { useStandardSize } from "../../hooks";

type BaseHandsProps = {
  values: [number, number];
  onPress: () => void;
};

export const Hands: React.FC<BaseHandsProps> = ({ values, onPress }) => {
  const size = useStandardSize();
  return (
    <View style={{ width: size * 9, height: size * 9 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Hand value={values[0]} />
        </View>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={onPress}
        >
          <ChangeIcon width={size * 2} height={size * 2} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1 }} />
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Hand value={values[1]} width={size * 3} height={size * 3} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
