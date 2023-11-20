import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ChooseSign = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Choose your sign
        </Text>
        <Image
            source={require('../img/circle.png')}
            style={ styles.sign}
        />
        <Image
            source={require('../img/cross1.png')}
            style={styles.sign} 
        />
    </View>
  )
}

const styles = StyleSheet.create({
    sign: {
        width: 90,
        height: 90,
        margin: 20,
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 25,
        margin:10,
        fontFamily: 'Lobster-Regular',
        color: 'rgb(98, 29, 29)',
    }
  });

export default ChooseSign