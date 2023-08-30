import React from 'react'
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { TasksContext, ITask } from '../../context/TasksContent'

export const TaskList = () => {
  const { tasks } = React.useContext(TasksContext)
  return (

    < FlatList
      // {/* FlatList retorna uma lista, é mais perfomático */ }
      data={tasks as unknown as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.buttonTask}>
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

