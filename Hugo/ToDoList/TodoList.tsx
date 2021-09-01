import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {ToDos} from './ToDos';

export type ToDosProps = {
  toDos: IToDo[];
  setToDos: Function;
};

export interface IToDo {
  id: number;
  text: string;
  completed: boolean;
}

const handleSubmit = (
  value: string,
  toDos: IToDo[],
  error: Boolean,
  setToDos: Function,
  setValue: Function,
) => {
  if (value && !error) {
    setToDos([
      ...toDos,
      {
        id: toDos.length !== 0 ? toDos[toDos.length - 1].id + 1 : 1,
        text: value,
        completed: false,
      },
    ]);
    setValue('');
  } else {
    setValue('');
  }
};

export const TodoList = () => {
  const [value, setValue] = useState<string>('');
  const [toDos, setToDos] = useState<IToDo[]>([]);
  const [error, setError] = useState<Boolean>(false);
  console.log('render');

  const {toDoContainer, mainTitle} = styles;
  return (
    <SafeAreaView style={toDoContainer}>
      <Text style={mainTitle}>Todo List</Text>
      <View>
        <TextInput
          placeholder="input test"
          value={value}
          onChangeText={(e: string): void => {
            setValue(e);
            setError(false);
          }}
        />
        <Button
          title="Add Task"
          onPress={() => {
            handleSubmit(value, toDos, error, setToDos, setValue);
          }}
        />
      </View>
      <View>
        {toDos[0] !== undefined && <Text>Your Task</Text>}
        {toDos[0] !== undefined && <ToDos toDos={toDos} setToDos={setToDos} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  toDoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: '#fff',
  },

  mainTitle: {
    // marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#3143e8',
    color: '#fff',
    fontSize: 36,
    fontWeight: '300',
    textAlign: 'center',
  },
});
