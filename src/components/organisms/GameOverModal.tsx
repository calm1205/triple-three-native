import React from "react";
import { StyleSheet, Modal, Text, View, Image } from "react-native";
import { COLOR } from "../../utils/style";
import { BasicButton } from "../atoms";

type BaseGameOverModalProps = {
  score?: number;
  open?: boolean;
  setState?: (_: boolean) => void;
  onPress?: () => void;
};

export const GameOverModal: React.FC<BaseGameOverModalProps> = ({
  score,
  open,
  setState,
  onPress,
}) => {
  return (
    <View style={{}}>
      <Modal
        style={styles.container}
        animationType="fade"
        visible={true}
        transparent={true}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "grey",
            opacity: 0.8,
          }}
        ></View>
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            position: "absolute",
            top: 0,
          }}
        >
          <View
            style={{
              backgroundColor: COLOR.BACKGROUND,
              width: 300,
              height: 300,
            }}
          >
            <Text style={{ fontSize: 30 }}>hello world</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {},
});
