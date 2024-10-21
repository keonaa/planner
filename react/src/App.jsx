import { useState } from 'react';
import './App.css';
import Task from './Components/Task';
import TaskForm from './Components/TaskForm'

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, {id: Date.now(), title, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <div className='head'>
        <h1>keona's Daily Planner</h1>
      </div>
      <div className='content'>
        <TaskForm addTask={addTask} />
        <h2>You have {tasks.filter(task => !task.completed).length} tasks remaining</h2>
        <div className='task-list'>
          {tasks.map(task => (
            <Task 
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
