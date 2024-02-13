import { View, Text, StyleSheet , Alert} from 'react-native';
import { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton';

function GameScreen({pickedNumber, onGameOver}) {
    const [currentGuess, setCurrentGuess] = useState(0);
    const [currentMin, setCurrentMin] = useState(1);
    const [currentMax, setCurrentMax] = useState(99)

    //GENERATES A NEW NUMBER AND UPDATES STATE
    function generateGuess() {
        let guess = Math.floor(Math.random() * (currentMax - currentMin) + currentMin)
        setCurrentGuess(guess)
        
        //RESETS CURRENT MIN AND MAX. USES guess AS PROXY BECAUSE WE'RE UPDATING STATE HERE
        if(guess < pickedNumber){
            setCurrentMin(  previousMin => guess + 1 )
        }
        if(guess > pickedNumber){
            setCurrentMax(  previousMax => guess - 1 )
        }
        if(guess == pickedNumber){
            Alert.alert('WINNER', 'You won, you beautiful bitch.', [{text:'Okay', style: 'default'}] );
            onGameOver()
        }

    }

    //CALLS ON + BUTTON PRESS. VALIDATES, THEN GENERATES
    function highPressHandler(){
        if(highOrLowValidator('higher')){
            generateGuess();
        }
        
    }
    //CALLS ON - BUTTON PRESS. VALIDATES, THEN GENERATES
    function lowPressHandler(){
        if(highOrLowValidator('lower')){
            generateGuess();
        }    
    }

    //VALIDATES BOTH HIGH AND LOW GUESSES. THROWS MESSAGE IF NOT VALIDATED
    function highOrLowValidator(higherOrLower){
        if(higherOrLower === 'higher' && pickedNumber > currentGuess 
            || higherOrLower === 'lower' && pickedNumber < currentGuess){
                return true;
        } else {
            Alert.alert('LIAR', 'tell truths please', [{text:'Okay', style: 'default'}])
            return false;
        }
    }



    return (
        <View style={styles.gameScreenContainer}>
            <View style={styles.pageTitleContainer}>
                <Text style={styles.pageTitleText}>Opponent Guess</Text>
            </View>
            <View style={styles.opponentGuessContainer}>
                <Text style={styles.opponetGuessText}>{currentGuess}</Text>
            </View>
            <View style={styles.highOrLowContainer}>
                <Text style={styles.higherOrLowerText}>Higher or Lower?</Text>
                <View style={styles.highOrLowButtonContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={highPressHandler}>+</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={lowPressHandler}>-</PrimaryButton>
                    </View>
                </View>

            </View >
            <Text>Picked number = {pickedNumber}</Text>
            <Text>Current Min = {currentMin}</Text>
            <Text>Current Max = {currentMax}</Text>


        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    gameScreenContainer: {
        paddingTop: 48,
        paddingHorizontal: 16,
        flex: 1,
        alignItems: 'center'
    },
    pageTitleContainer: {
        borderColor: '#fff',
        borderWidth: 3,
        borderRadius: 8,
        width: '90%',
        marginBottom: 28
    },
    pageTitleText:{
        fontSize: 32,
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 12
    },
    opponentGuessContainer: {
        borderColor: '#d1e9f6',
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
        color: '#d1e9f6',
        fontWeight: 'bold'
    },
    highOrLowContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#2fabed',
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#01273b',
        shadowOffset: { width: 3, height: 5 },
        shadowRadius: 6,
        shadowOpacity: .5
    },
    higherOrLowerText:{
        color: '#d1e9f6',
        textAlign: 'center',
        fontSize: 24,
        marginBottom:16,
    },
    buttonContainer: {
        flex: 1,
    },
    highOrLowButtonContainer: {
        flexDirection: 'row'
    }
})