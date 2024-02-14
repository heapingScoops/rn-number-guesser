import { View, TextInput, StyleSheet, Alert, Text } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'

function StartGameScreen(props) {
    const [userInput, setUserInput] = useState('')
    function handleInputChange(enteredText) {
        setUserInput(enteredText)
    }
    function resetInputHandler() {
        setUserInput('')
    }
    function handlePressConfirm() {
        const chosenNumber = parseInt(userInput);
        validateInput(chosenNumber);
        props.handlePickedNumber(chosenNumber);
    }
    function validateInput(num) {
        num === '' || num <= 0 || isNaN(num) || num > 99
            ? Alert.alert('ILLEGAL!', 'the thing you entered was bad. Bad Boy. Do a normal number!', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            : console.log('good boy uwu')
    }

    return (
        <View style={styles.startRouteContainer}>
            <Title>Let Me Guess Your Number</Title>
            <View style={styles.startGameContainer}>
                <Text style={styles.enterText}>Enter a number</Text>
                <Text style={styles.enterTextSmol}>(I dare you)</Text>
                <TextInput
                    style={styles.textInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    value={userInput}
                    onChangeText={handleInputChange} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={handlePressConfirm}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    )

}

export default StartGameScreen;

const styles = StyleSheet.create({
    startRouteContainer:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },
    startGameContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginHorizontal: 24,
        paddingHorizontal: 16,
        paddingVertical: 32,
        backgroundColor: Colors.primary400,
        borderRadius: 8,
        elevation: 4,
        shadowColor: Colors.primary1000,
        shadowOffset: { width: 3, height: 5 },
        shadowRadius: 6,
        shadowOpacity: .5
    },
    enterText:{
        fontSize: 32,
        color: Colors.primary1000,
        fontFamily: 'bitwise',
    },
    enterTextSmol:{
        color: Colors.primary1000,
        fontFamily: 'bitwise',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    textInput: {
        height: 50,
        fontSize: 32,
        fontFamily: 'bitwise',
        width: 50,
        textAlign: 'center',
        borderBottomColor: Colors.primary1000,
        borderBottomWidth: 2,
        color: Colors.primary1000,
        marginVertical: 16,
       
    },
    buttonContainer: {
        flex: 1,
    }
})

