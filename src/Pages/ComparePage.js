// src/Pages/ComparePage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Comparison from '../Components/Comparison';

const ComparePage = ({ getTaskComparisons, finalizeTaskComparisons }) => {
    const [taskComparisons, setTaskComparisons] = useState(getTaskComparisons());
    const [comparisonIndex, setComparisonIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (taskComparisons.length === 0) {
            // If there are no comparisons, redirect to the home page
            navigate('/');
        }
    }, [taskComparisons, navigate]);

    const handleTaskSelection = (winnerTaskId) => {
        const updatedComparisons = [...taskComparisons];
        updatedComparisons[comparisonIndex].winnerTaskId = winnerTaskId;
        setTaskComparisons(updatedComparisons);

        if (comparisonIndex < taskComparisons.length - 1) {
            setComparisonIndex(index => index + 1);
        } else {
            // All comparisons completed, navigate to results page
            finalizeTaskComparisons(taskComparisons)
            navigate('/result');
        }
    };

    return (
        <div className="compare-page">
            <Header
                title="Compare"
                paragraph="Select the task that is most important to you."
            />
            {taskComparisons.length > 0 &&
                <Comparison
                    task1={taskComparisons[comparisonIndex]?.task1}
                    task2={taskComparisons[comparisonIndex]?.task2}
                    onTaskSelection={handleTaskSelection}
                />
            }
            <div className="counting-indicator">{comparisonIndex + 1}/{taskComparisons.length}</div>
        </div>
    );
};

export default ComparePage;
