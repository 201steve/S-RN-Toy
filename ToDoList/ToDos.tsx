import React from 'react';
import {View, Text, Button} from 'react-native';
import {IToDo, ToDosProps} from './TodoList';

const handleComplete = (
  toDos: IToDo[],
  setToDos: Function,
  idx: number,
): void => {
  const newToDos: IToDo[] = [...toDos];
  if (newToDos[idx].completed) {
    newToDos.splice(idx, 1, {...newToDos[idx], completed: false});
  } else {
    newToDos.splice(idx, 1, {...newToDos[idx], completed: true});
  }
  setToDos(newToDos);
};

const deleteToDo = (toDos: IToDo[], setToDos: Function, idx: number): void => {
  const newToDos: IToDo[] = [...toDos];
  newToDos.splice(idx, 1);
  setToDos(newToDos);
};

export const ToDos: React.FC<ToDosProps> = ({toDos, setToDos}) => {
  const toDoList = toDos.map((toDo: IToDo, idx: number) => {
    return (
      <View key={'toDo' + toDo.id}>
        <Text>{toDo.text}</Text>
        <Button
          title={toDo.completed ? 'Incomplete' : 'Complete'}
          onPress={() => {
            handleComplete(toDos, setToDos, idx);
          }}
        />
        <Button
          title="DELETE"
          onPress={() => {
            deleteToDo(toDos, setToDos, idx);
          }}
        />
      </View>
    );
  });

  return <>{toDoList}</>;
};
