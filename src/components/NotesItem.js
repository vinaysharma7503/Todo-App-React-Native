import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const NotesItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this,props.id)}>
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default NotesItem

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        justifyContent: 'space-between'
    }
})