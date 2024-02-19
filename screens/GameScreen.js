import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import { useState, useEffect } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import NumberContainer from '../components/game/NumberContainer';
import { AntDesign } from '@expo/vector-icons'
import Guess from '../components/game/Guess'


function GameScreen({ pickedNumber, onGameOver, onGuess, guesses }) {
    //interesting we're not doing this with useEffect.
    const [currentMin, setCurrentMin] = useState(1);
    const [currentMax, setCurrentMax] = useState(99);
    const [currentGuess, setCurrentGuess] = useState();

    useEffect(() => {
        generateGuess();

    }, [])

    //GENERATES A NEW NUMBER AND UPDATES STATE
    function generateGuess() {
        let guess = Math.floor(Math.random() * (currentMax - currentMin) + currentMin);
        setCurrentGuess(guess)
        onGuess(guess)

        //RESETS CURRENT MIN AND MAX. USES guess AS PROXY BECAUSE WE'RE UPDATING STATE HERE
        if (guess < pickedNumber) {
            setCurrentMin(previousMin => guess + 1)
        }
        if (guess > pickedNumber) {
            setCurrentMax(previousMax => guess - 1)
        }
        if (guess == pickedNumber) {
            Alert.alert('WINNER', 'I am ALL-KNOWING (given time and clues).', [{ text: 'Okay', style: 'default' }]);
            onGameOver()
        }
        return guess;

    }

    //CALLS ON + BUTTON PRESS. VALIDATES, THEN GENERATES
    function highPressHandler() {
        if (highOrLowValidator('higher')) {
            generateGuess();
        }

    }
    //CALLS ON - BUTTON PRESS. VALIDATES, THEN GENERATES
    function lowPressHandler() {
        if (highOrLowValidator('lower')) {
            generateGuess();
        }
    }

    //VALIDATES BOTH HIGH AND LOW GUESSES. THROWS MESSAGE IF NOT VALIDATED
    function highOrLowValidator(higherOrLower) {
        if (higherOrLower === 'higher' && pickedNumber > currentGuess
            || higherOrLower === 'lower' && pickedNumber < currentGuess) {
            return true;
        } else {
            Alert.alert('LIAR', 'tell truths please', [{ text: 'Okay', style: 'default' }])
            return false;
        }
    }



    return (
        <View style={styles.gameScreenContainer}>
            <Title>My Hypothesis</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.highOrLowContainer}>
                <Text style={styles.higherOrLowerText}>WAIT...</Text>
                <Text style={styles.higherOrLowerText}>Is it Higher or Lower?</Text>
                <View style={styles.highOrLowButtonContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={highPressHandler}>
                            <AntDesign name='pluscircle' color={Colors.primary100} size={24} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={lowPressHandler}>
                            <AntDesign name='minuscircle' color={Colors.primary100} size={24} />
                        </PrimaryButton>
                    </View>
                </View>


            </View >
            {/* <Text>Picked number = {pickedNumber}</Text>
            <Text>Current Min = {currentMin}</Text>
            <Text>Current Max = {currentMax}</Text> */}
            <View style={styles.guessListContainer}>
                <FlatList
                    data={guesses}
                    renderItem={(itemData) => {
                        return <Guess guess={itemData.item} guessNumber={itemData.index + 1}></Guess>
                    }}
                    keyExtractor={(item, index) => {
                        return item
                    }}
                    style
                />
            </View>

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
    highOrLowContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        marginBottom: 16,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary400,
        borderRadius: 8,
        elevation: 4,
        shadowColor: Colors.primary1000,
        shadowOffset: { width: 3, height: 5 },
        shadowRadius: 6,
        shadowOpacity: .5
    },
    higherOrLowerText: {
        color: Colors.primary100,
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 16,
        fontFamily: 'bitwise',
    },
    buttonContainer: {
        flex: 1,
    },
    highOrLowButtonContainer: {
        flexDirection: 'row'
    },
    guessListContainer:{
        width: '90%',
        flex: 1,
        padding: 16,
    }
})