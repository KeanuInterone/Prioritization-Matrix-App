import React from 'react';

const Comparison = ({ task1, task2, onTaskSelection }) => {
    const handleTask1Select = () => {
        onTaskSelection(task1.id);
    };

    const handleTask2Select = () => {
        onTaskSelection(task2.id);
    };

    return (
        <div className="comparison">
            <div className="comparison-task-card" onClick={handleTask1Select}>{task1.text}</div>
            <div className="comparison-task-card" onClick={handleTask2Select}>{task2.text}</div>
        </div>
    );
};

export default Comparison;