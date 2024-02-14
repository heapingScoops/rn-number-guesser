import { Text , View , StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function NumberContainer({ children }) {

    return (
        <View style={styles.opponentGuessContainer}>
            <Text style={styles.opponetGuessText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    opponentGuessContainer: {
        borderColor: Colors.primary100,
        borderWidth: 3,
        borderRadius: 8,
        width: '70%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 36
    },
    opponetGuessText: {
        fontSize: 42,
        color: Colors.primary100,
        fontFamily: 'bitwise',
    },
})

export default NumberContainer