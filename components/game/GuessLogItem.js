import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constant/colors"

const GuessLogItem = ({roundNumber, guess}) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>Lượt {roundNumber}</Text>
            <Text style={styles.itemText}>Máy đoán: {guess}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primaryRed,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.primaryYellow, 
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans',
        fontSize: 16,
    }
})

export default GuessLogItem
