import React, { useState, useEffect, useRef } from 'react';

const Task = ({ taskId, taskName, onTaskChanged, onTaskDeleted }) => {
    const [isEditing, setIsEditing] = useState(taskName === '');
    const [taskText, setTaskText] = useState(taskName);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleInputChange = (e) => {
        setTaskText(e.target.value);
    };

    const handleInputBlur = () => {
        if (taskText.trim() !== '') {
            setIsEditing(false);
            onTaskChanged(taskId, taskText);
        }
    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleInputBlur();
        }
    };

    const handleLabelClick = () => {
        setIsEditing(true);
    };

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        if (window.confirm('Are you sure you want to delete this task?')) {
            onTaskDeleted(taskId);
        }
    };

    return (
        <div className="task-card" onClick={handleLabelClick}>
            {isEditing ? (
                <div className='task-input-container'>
                    <label className='task-input-label'>
                        Task Name:
                    </label>
                    <input
                        className='task-input'
                        type="text"
                        value={taskText}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        onKeyUp={handleInputKeyPress}
                        ref={inputRef}
                    />
                </div>
            ) : (
                <div className="task-label-container">
                    <span className="task-label">
                        {taskText}
                    </span>
                    <button className="delete-button" onClick={handleDeleteClick}>
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
};

export default Task;
