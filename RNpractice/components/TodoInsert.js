import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function TodoInsert() {
  return (
    <View>
      <TextInput
        style={StyleSheet.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        autoCorrect={false}
      />
      <View style={StyleSheet.button}>
        <Button title={'ADD'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});
