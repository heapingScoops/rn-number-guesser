import { View, Text , StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function Guess( {guess , guessNumber} ){

    return( 
        <View style={styles.guessContainer}>
            <Text style={styles.guessText}>Guess number {guessNumber}: {guess}</Text>
        </View>
    )
}

export default Guess;

styles = StyleSheet.create({
    guessContainer:{
        backgroundColor: Colors.primary700,
        paddingVertical: 10,
        marginVertical: 6,
        borderRadius: 28,
        borderWidth: 2,
        borderColor: Colors.primary1000
    },
    guessText:{
        color: Colors.primary100,
        fontFamily: 'bitwise',
        fontSize: 18,
        textAlign: 'center'
    }
})