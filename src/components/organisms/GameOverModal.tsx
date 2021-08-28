import React from "react";
import { StyleSheet, Modal, Text, View } from "react-native";
import { COLOR } from "../../utils/style";
import { BasicButton } from "../atoms";

type BaseGameOverModalProps = {
  score?: number;
  open?: boolean;
  setState: (_: boolean) => void;
  onPress: () => void;
};

export const GameOverModal: React.FC<BaseGameOverModalProps> = ({
  score = 0,
  open = false,
  setState,
  onPress,
}) => {
  return (
    <View>
      <Modal animationType="fade" visible={open} transparent={true}>
        <View style={styles.curtain} />
        <View style={styles.container}>
          <View style={styles.modal}>
            <Text style={styles.title}>Game Over</Text>
            <Text style={styles.text}>
              Your score is <Text style={styles.score}>{score}</Text>
            </Text>
            <View style={[{ flexDirection: "row" }, styles.buttonBox]}>
              <BasicButton text="BACK" onPress={() => setState(false)} />
              <BasicButton text="NEW GAME" onPress={onPress} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  curtain: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.8,
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    position: "absolute",
    top: 0,
  },
  modal: {
    backgroundColor: COLOR.BORDER,
    width: 300,
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
    color: COLOR.TEXT,
  },
  text: {
    textAlign: "center",
    color: COLOR.TEXT,
  },
  score: {
    color: COLOR.PRIMARY,
    fontSize: 40,
  },
  buttonBox: {
    marginTop: 20,
    paddingHorizontal: 40,
    justifyContent: "space-between",
  },
});
