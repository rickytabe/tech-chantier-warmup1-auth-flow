
import { StyleSheet, Text, TouchableOpacity, DimensionValue } from "react-native";
import colors from "../constants/colors";

type Props = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  width?: number | string; 
};

export default function CustomButton({ 
  title, 
  onPress, 
  backgroundColor = colors.primary, 
  textColor = colors.white,
  width 
}: Props) {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        { backgroundColor },
        width ? { width: width as DimensionValue } : {} 
      ]} 
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});
