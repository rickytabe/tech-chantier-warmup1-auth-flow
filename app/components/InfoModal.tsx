import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import colors from "../constants/colors";

type InfoModalProps = {
  visible: boolean;
  onClose: () => void;
  onCloseAndClear: () => void;
  title?: string;
  info: { [key: string]: string };
};

export default function InfoModal({
  visible,
  onClose,
  onCloseAndClear,
  title = "Info",
  info,
}: InfoModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {Object.entries(info).map(([key, value]) => (
            <View key={key} style={styles.row}>
              <Text style={styles.label}>{key}:</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          ))}
          <View style={styles.buttonRow}>
            <CustomButton title="Close" width='40%' onPress={onClose} />
            <CustomButton
              title="Clear"
              width='40%'             
              backgroundColor={colors.secondary}
              onPress={onCloseAndClear}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 24,
    width: "80%",
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    fontWeight: "600",
    marginRight: 8,
    color: colors.gray,
    textTransform: "capitalize",
  },
  value: {
    color: colors.primary,
    flexShrink: 1,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent:'center',
    marginTop: 20,
    fontSize:10,
  },
});