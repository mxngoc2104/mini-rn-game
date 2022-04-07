import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert, Image } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constant/colors";
import Card from "../components/ui/Card";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (input) => {
    setEnteredNumber(input);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      //show alert
      Alert.alert("Không hợp lệ", "Hãy nhập số trong khoảng từ 1 đến 99", [
        { text: "OK", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    props.onPickNumber(choosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      {/* <Title>Guess my number!</Title> */}
      <Image
        source={require("../assets/images/guess_number.png")}
        style={styles.image}
      />
      <Card>
        <InstructionText>Hãy nhập số trong khoảng</InstructionText>
        <InstructionText>từ 1 đến 99</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100,
  },
  image: {
    width: 250,
    height: 120,
    marginBottom: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primaryYellow,
    borderBottomWidth: 2,
    color: Colors.primaryYellow,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  singleButtonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
