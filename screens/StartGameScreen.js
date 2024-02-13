import { View, TextInput, StyleSheet , Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'

function StartGameScreen( props ) {
const[userInput, setUserInput] = useState('')
function handleInputChange(enteredText){
    setUserInput(enteredText)
}
function resetInputHandler(){
    setUserInput('')
}
function handlePressConfirm(){
    const chosenNumber = parseInt(userInput);
    validateInput(chosenNumber);
    props.handlePickedNumber(chosenNumber);
}
function validateInput(num){
    num === '' || num <= 0 || isNaN(num) || num > 99
        ? Alert.alert('ILLEGAL!' , 'the thing you entered was bad. Bad Boy. Do a normal number!', [{text: 'Okay', style: 'destructive', onPress : resetInputHandler}]) 
        : console.log('good boy uwu')
}

    return (
        <View style={styles.startGameContainer}>
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
    )

}

export default StartGameScreen;

const styles = StyleSheet.create({
    startGameContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
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
    buttonsContainer: {
        flexDirection: 'row',

    },
    textInput: {
        height: 50,
        fontSize: 32,
        width: 50,
        textAlign: 'center',
        borderBottomColor: '#ddf1aa',
        borderBottomWidth: 2,
        color: '#ddf1aa',
        marginVertical: 8,
        fontWeight: 'bold'
        // '#ccdd2f'
    },
    buttonContainer:{
        flex: 1,
    }
})

