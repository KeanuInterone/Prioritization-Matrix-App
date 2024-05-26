import React, { useState } from 'react';

const OrderedTask = ({ position, task, wins }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div className={`ordered-task ${isCompleted ? 'completed' : ''}`}  onClick={handleComplete}>
            <div className='position-info'>
                <div className="position">{position}.)</div>
            </div>
            <div className="task-info">
                <div className="task-text">{task.text}</div>
                <div className="wins">{wins} votes</div>
            </div>
            <button className="complete-button">
                {isCompleted ? 'Undo' : 'Complete'}
            </button>
        </div>
    );
};

export default OrderedTask;
