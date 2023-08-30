import React from 'react';
import {
  Platform,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
  //ScrollView // usado para pequenas listas
} from 'react-native';
import { TaskList } from '../../components/TaskList';
import { useTaskList } from '../../context/TasksContent';

export const Home = () => {
  const [newTask, setNewTask] = React.useState('')
  const { addTask } = useTaskList()

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Tarefa vaga'
    }

    addTask(data)

  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo dev</Text>
        <TextInput
          onChangeText={setNewTask}
          placeholder='Nova Tarefa'
          placeholderTextColor={'#555'}
          style={styles.input} />
        <TouchableOpacity
          onPress={handleAddNewTask}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.titleTasks}>Minhas Tarefas</Text>

        <TaskList />

        {/* Usando ScrollView
         <ScrollView>
          {tasks.map((task) => (
            <TouchableOpacity key={task.id} style={styles.buttonTask}>
              <Text style={styles.titleTask}>{task.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView> */}

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214'
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold'
  },
  titleTasks: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#eba417',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

