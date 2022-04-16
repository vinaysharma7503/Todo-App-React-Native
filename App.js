/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme, View, Button, FlatList } from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import NotesInput from './src/components/NotesInput';
import NotesItem from './src/components/NotesItem';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  // const [enterNote, setEnterNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  // const noteInputHandler = (enteredText) => {
  //   setEnterNote(enteredText)
  // }

  const addNoteHandler = (notesTitle, setNotesTitle) => {
    // setNotes([...notes,enterNote])
    setNotes(currentNotes => [...currentNotes, notesTitle])
    setNotesTitle('')
    setIsAddMode(false)
  }

  const removeNoteHandler = (noteId) => {
    setNotes(currentNotes => {
      return currentNotes.filter((note) => note.id !== noteId);
    })
  }

  const cancelNotesAdditionHandler=()=>{
    setIsAddMode(false)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 10
          }}>
          <TextInput style={styles.input} placeholder='Add New Note' onChangeText={noteInputHandler} value={enterNote} />
          <Button title="ADD" onPress={addNoteHandler} />
        </View> */}
        <View style={styles.btn}>
        <Button title='Add New Note' onPress={() => setIsAddMode(true)} />
        </View>
        <NotesInput visible={isAddMode} onAddNotes={addNoteHandler} onCancel={cancelNotesAdditionHandler}/>
        <FlatList style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white, padding: 10
        }} data={notes} renderItem={itemData => <NotesItem id={itemData.item.id} onDelete={removeNoteHandler} title={itemData.item} />} />
        {/* <ScrollView style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,padding:10
        }}>
          {notes.map((note) => <View style={styles.listItem} key={note}><Text>{note}</Text></View>)}
        </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn:{
    padding:10
  },
  input: {
    borderWidth: 1,
    width: '80%'
  },
  listItem: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    justifyContent: 'space-between'
  }
});

export default App;
