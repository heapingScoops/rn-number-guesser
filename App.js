
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';


export default function App() {
  //pickedNumber needs to be known by Both StartGameScreen & GameScreen
  const[pickedNumber, setPickedNumber] = useState();
  //gameOver
  const[gameOver, setGameOver] = useState(false);

  function pickedNumberHandler(pickedNumber){
    setPickedNumber(pickedNumber);
  }
  function gameOverTrueHandler(){
    setGameOver(true)
  }

  let screen= <StartGameScreen handlePickedNumber={pickedNumberHandler}  />
  if(gameOver){screen = <GameOverScreen />}
  else if(pickedNumber){screen = <GameScreen pickedNumber={pickedNumber} onGameOver={gameOverTrueHandler} />}
  

  return (
    <LinearGradient colors={['#045987', '#fff',]} style={styles.rootView}>
      <ImageBackground 
        source={require('./assets/images/angry-computer-dice.webp')}
        style={styles.rootView}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}>
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
   
  },
  backgroundImage:{
    opacity: .15
  }
});
