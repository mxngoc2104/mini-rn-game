import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Lượt máy đoán</Title>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      {/* <View>
                Log Round
            </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 36,
  },
});

export default GameScreen;
