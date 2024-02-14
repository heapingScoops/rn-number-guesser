import { StyleSheet, Text, View } from 'react-native'

function Title({ children }) {
    return (
        <View style={styles.pageTitleContainer}>
            <Text style={styles.pageTitleText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pageTitleContainer: {
        borderColor: '#fff',
        borderWidth: 3,
        borderRadius: 8,
        width: '90%',
        marginTop: 12,
        marginBottom: 28
    },
    pageTitleText:{
        fontSize: 32,
        fontFamily: 'bitwise',
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 12
    },
})

export default Title
