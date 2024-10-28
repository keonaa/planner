function Task({ task, toggleComplete, deleteTask }) {
    return (
        <div className="task-content">
            <div className="task-left">
                <input 
                    type="checkbox"
                    id={`task-${task.id}`}
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    disabled={task.completed} 
                />
                <label htmlFor={`task-${task.id}`} className="custom-checkbox"></label> 
                <span className="task-text" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                </span>
            </div>
            <button onClick={() => deleteTask(task.id)}>Remove</button>
        </div>
    );
};

export default Task;
