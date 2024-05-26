import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderedTask from '../Components/OrderedTask';
import Header from '../Components/Header';

const ResultsPage = ({ orderedTasks }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (orderedTasks.length === 0) {
            navigate('/');
        }
    }, [orderedTasks, navigate]);

    return (
        <div className="results-page">
            <Header
                title="Results"
                paragraph="Here are your tasks ordered by importance."
            />
            {orderedTasks && orderedTasks.map((orderedTask, index) => (
                <OrderedTask
                    key={orderedTask.task.id}
                    position={index + 1}
                    task={orderedTask.task}
                    wins={orderedTask.wins || 'No'}
                />
            ))}
        </div>
    );
};

export default ResultsPage;
