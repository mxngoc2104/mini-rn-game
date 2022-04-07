import { Text, StyleSheet } from "react-native";
import Colors from "../../constant/colors"

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.titleColor,
    borderRadius: 45,
    padding: 12,
    marginVertical: 24,
    backgroundColor: Colors.primaryBlue,
  },
});

export default Title;
