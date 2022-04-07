import { StyleSheet, View } from "react-native";
import Colors from "../../constant/colors"

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 26,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.Red_3rd,
    //add shadow - Android props only
    elevation: 8,
    //
    //add shadow - iOS props only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    //
  },
});

export default Card;
