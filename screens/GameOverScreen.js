import { View, Text, StyleSheet, Image } from 'react-native'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({onPress , numberOfMoves, pickedNumber}) {
    return (
        <View style={styles.gameOverScreenContainer}>
            <Title>I WIN</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/DALL-E-computer-laughing.webp')} />
            </View>
            <Text style={styles.text}>I only needed <Text style={styles.highlight}>{numberOfMoves}</Text> guesses to uncover your <Text style={styles.highlight}>{pickedNumber}</Text></Text>
            <PrimaryButton onPress={onPress}>Play Me Again!</PrimaryButton>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    gameOverScreenContainer:{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 100

    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 4,
        borderColor: Colors.primary1000,
        overflow: 'hidden',
        marginBottom: 24
    },
    image:{
        width: '100%',
        height: '100%',
        
    },
    text:{
        fontFamily: 'bitwise',
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 12,
    },
    highlight:{
        color: Colors.primary600
    }

})