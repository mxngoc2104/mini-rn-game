import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constant/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: Colors.Pink_2nd,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    backgroundColor: Colors.pink,
  },
  text: {
    color: "white",
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
