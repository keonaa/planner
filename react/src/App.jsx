import { useState } from 'react';
import './App.css';
import Task from './Components/Task';
import TaskForm from './Components/TaskForm'

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); 

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; 
  });

  return (
    <>
      <div className='head'>
        <h1>Keona's Daily Planner</h1>
      </div>
      <div className='content'>
        <div className='filter-buttons'>
          <button onClick={() => setFilter('all')}>All Tasks</button>
          <button onClick={() => setFilter('completed')}>Completed Tasks</button>
          <button onClick={() => setFilter('pending')}>Pending Tasks</button>
        </div>
        <TaskForm addTask={addTask} />
        <h2>You have {filteredTasks.filter(task => !task.completed).length} tasks remaining</h2>
        <div className='task-list'>
          {filteredTasks.map(task => (
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
