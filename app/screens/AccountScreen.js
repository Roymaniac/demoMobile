import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList, GestureHandlerRootView, } from 'react-native-gesture-handler';

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeperator from '../components/ListItemSeperator'
import AppIcon from '../components/AppIcon'

import colors from '../config/colors';


const menuItems = [
    {
        title: "My Patients",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    },
    {
        title: "My Appointments",
        icon: {
            name: "calendar",
            backgroundColor: colors.tertiary
        }
    },
    {
        title: 'Settings',
        icon: {
            name: 'tools',
            backgroundColor: colors.yellow
        }
    }
]

export default function AccountScreen(prop) {
    return (
        <Screen style={styles.screen}>
            <GestureHandlerRootView>
                <View style={styles.container}>
                    <ListItem
                        title="Dr. Ryan Johnson"
                        subTitle="ryanjohson@gmail.com"
                        image={require('../assets/ryan.jpg')}
                    />
                </View>
                <View style={styles.container}>
                    <FlatList
                        data={menuItems}
                        keyExtractor={menuItem => menuItem.title}
                        ItemSeparatorComponent={() => <ListItemSeperator />}
                        renderItem={({ item }) => (
                            <ListItem
                                title={item.title}
                                IconComponent={
                                    <AppIcon
                                        name={item.icon.name}
                                        backgroundColor={item.icon.backgroundColor}
                                    />
                                }
                                onPress={() => console.log('menu', item)}
                            />
                        )}
                    />
                </View>
                <ListItem
                    title="Log Out"
                    IconComponent={
                        <AppIcon name="logout" backgroundColor="#ffe66d" />
                    }
                    onPress={() => console.log('Log Out')}
                />
            </GestureHandlerRootView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
})