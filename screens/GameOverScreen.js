import { StyleSheet, View, Text, Image } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constant/colors";

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/game_over.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.summaryText}>
        Điện thoại cần <Text style={styles.highlightText}>{roundsNumber}</Text> lượt để đoán
        số <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Chơi lại</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 400,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.Red_3rd,
  },
});

export default GameOverScreen;
