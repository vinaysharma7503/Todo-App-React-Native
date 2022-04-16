import { StyleSheet, Text, View, TextInput, Button, useColorScheme, Modal } from 'react-native'
import React, { useState } from 'react'
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

const NotesInput = (props) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [enterNote, setEnterNote] = useState('');

    const noteInputHandler = (enteredText) => {
        setEnterNote(enteredText)
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View
                style={{
                    backgroundColor: isDarkMode ? Colors.black : Colors.white, flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10
                }}>
                <TextInput style={styles.input} placeholder='Add New Note' onChangeText={noteInputHandler} value={enterNote} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={props.onAddNotes.bind(this, enterNote, setEnterNote)} />
                    </View>
                    <View style={styles.button}>
                        <Button title='CANCEL' color='red' onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default NotesInput

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: '80%',
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})