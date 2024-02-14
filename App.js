
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import Colors from './constants/colors'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

export default function App() {
  //pickedNumber needs to be known by Both StartGameScreen & GameScreen
  const [pickedNumber, setPickedNumber] = useState();
  //guesses
  const[guesses, setGuesses]= useState([])
  //gameOver
  const [gameOver, setGameOver] = useState(true);

  function newGuessHandler(guess){
    setGuesses(previousGuesses => [...guesses, guess])
    
  }

  const [fontsLoaded] = useFonts({
    'bitwise' : require('./assets/fonts/bitwise.ttf')
  })
  if(!fontsLoaded){
    return <AppLoading />
  }
  function restartHandler(){
    setPickedNumber(),
    setGameOver(true),
    setGuesses([])
  }

  function pickedNumberHandler(pickedNumber) {
    setPickedNumber(pickedNumber);
    setGameOver(false)
  }
  function gameOverTrueHandler() {
    setGameOver(true)
  }

  let screen = <StartGameScreen handlePickedNumber={pickedNumberHandler} />
  if (gameOver && pickedNumber) { screen = <GameOverScreen onPress={restartHandler} pickedNumber={pickedNumber} numberOfMoves={guesses.length + 1}/> }
  else if (pickedNumber) { screen = <GameScreen pickedNumber={pickedNumber} onGameOver={gameOverTrueHandler} onGuess={newGuessHandler} guesses={guesses}/> }


  return (
    <LinearGradient colors={[Colors.primary700, '#fff',]} style={styles.rootView}>
      <ImageBackground
        source={require('./assets/images/angry-computer-dice.webp')}
        style={styles.rootView}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootView}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,

  },
  backgroundImage: {
    opacity: .15
  }
});
