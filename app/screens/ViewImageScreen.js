import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' color='white' size={20} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' color='white' size={25} />
            </View>
            <Image
                resizeMode='contain'
                style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30,
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30,
    }
})

export default ViewImageScreen