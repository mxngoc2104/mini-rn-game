import { StyleSheet, Text } from "react-native";
import Colors from "../../constant/colors"

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: Colors.primaryYellow,
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "center",
  },
});

export default InstructionText;
