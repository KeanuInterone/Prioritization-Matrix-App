import { useState } from 'react';

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [orderedTasks, setOrderedTasks] = useState([]);

    const addTask = () => {
        const taskId = Date.now();
        const newTask = { id: taskId, text: '' };
        setTasks(prevTasks => [...prevTasks, newTask]);
        return taskId;
    };

    const changeTaskName = (id, name) => {
        setTasks(prevTasks =>
            prevTasks.map(task => (task.id === id ? { ...task, text: name } : task))
        );
    };

    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const getTaskComparisons = () => {
        const comparisons = [];
        for (let i = 0; i < tasks.length - 1; i++) {
            for (let j = i + 1; j < tasks.length; j++) {
                comparisons.push({
                    task1: { id: tasks[i].id, text: tasks[i].text },
                    task2: { id: tasks[j].id, text: tasks[j].text },
                    winnerTaskId: null
                });
            }
        }
        // Shuffle comparisons
        comparisons.sort(() => Math.random() - 0.5);
        return comparisons;
    };

    const finalizeTaskComparisons = (comparisons) => {
        // Count wins for each task
        const wins = {};
        tasks.forEach(task => {
            wins[task.id] = 0;
        });
        comparisons.forEach(comparison => {
            wins[comparison.winnerTaskId]++;
        });
        // Sorted wins list
        const sortedWins = Object.keys(wins).sort((a, b) => wins[b] - wins[a]);
        // Create ordered tasks list
        const newOrderedTasks = sortedWins.map((taskId) => {
            const task = tasks.find(task => task.id === parseInt(taskId));
            return { task, wins: wins[taskId] };
        });
        setOrderedTasks(newOrderedTasks);
    };

    return {
        tasks,
        addTask,
        changeTaskName,
        deleteTask,
        getTaskComparisons,
        finalizeTaskComparisons,
        orderedTasks
    };
};