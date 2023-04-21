import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.home}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        
    },
    home: {
        fontFamily: 'nunito-regular',
        fontSize: 40
    }
})