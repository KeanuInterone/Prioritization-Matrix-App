import React from 'react';

const CreateTaskButton = ({ onPressed }) => {
    return (
        <button onClick={onPressed} className="create-task-button">
            Add Task
        </button>
    );
};

export default CreateTaskButton;
