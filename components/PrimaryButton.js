import { Text, View, Pressable , StyleSheet} from 'react-native'

function PrimaryButton(props) {
    function pressHandler(){
        props.onPress()
    }
    
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={pressHandler} 
                android_ripple={{color: '#fff'}}
                style={({pressed}) => pressed 
                    ? [styles.buttonInnerContainer, styles.pressed]
                    : styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
      
    },
    buttonInnerContainer:{
        backgroundColor: '#0572ad',
        paddingVertical: 8,
        paddingHorizontal: 12,
        elevation: 2
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center'
    },
    pressed: {
        opacity: .75,
    }

})

export default PrimaryButton