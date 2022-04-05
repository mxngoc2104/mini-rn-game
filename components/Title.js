import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#D93B3B",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#D93B3B",
    padding: 12,
    marginBottom: 24,
  },
});

export default Title;
