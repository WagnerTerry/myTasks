import React from 'react'
import { Alert, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { ITask, useTaskList } from '../../context/TasksContent'

export const TaskList = () => {
  const { tasks, removeTask } = useTaskList()

  const handleRemoveTask = (id: string) => {
    Alert.alert('Tem certeza?', 'Deseja realmente excluir a tarefa', [
      {
        text: "Cancelar",
        onPress: () => { }
      },
      {
        text: "Excluir",
        onPress: () => removeTask(id)
      }
    ])
  }

  return (

    < FlatList
      // {/* FlatList retorna uma lista, é mais perfomático */ }
      data={tasks as unknown as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleRemoveTask(item.id)}
          style={styles.buttonTask}
        >
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center'
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

