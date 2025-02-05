import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'

export default function AppCard({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
    },
    image: {
        width: '100%',
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
})
