function Task({ task, toggleComplete, deleteTask }) {
    return (
        <div className="task-content">
            <div className="task-left">
                <input 
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                />
                <span className="task-text" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                </span>
            </div>
            <button onClick={() => deleteTask(task.id)}>Remove</button>
        </div>
    );
};

export default Task;