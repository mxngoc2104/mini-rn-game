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
    borderColor: '#C71585',
    borderRadius: 8,
    padding: 24,
    margin: 24,
    backgroundColor: '#DB7093',
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;
