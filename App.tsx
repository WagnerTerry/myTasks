import React from 'react';
import { Home } from './src/pages/Home';
import { TasksProvider } from './src/context/TasksContent';

const App = () => {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  )
}

export default App;
