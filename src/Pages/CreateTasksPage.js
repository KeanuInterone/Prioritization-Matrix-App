import React from 'react';
import Header from '../Components/Header';
import Task from '../Components/Task';
import CreateTaskButton from '../Components/CreateTaskButton';
import PrioritizeButton from '../Components/PrioritizeButton';
import { useNavigate } from 'react-router-dom';

const CreateTasksPage = ({ tasks, addTask, changeTaskName, deleteTask }) => {
    const navigate = useNavigate();

    const handleTaskChanged = (task_id, new_text) => {
        changeTaskName(task_id, new_text);
    };

    const handleTaskDeleted = (task_id) => {
        deleteTask(task_id);
    };

    const startPrioritization = () => {
        if (tasks.length > 1) {
            navigate('/compare', { state: { tasks } });
        } else {
            alert('Please add at least two tasks to prioritize.');
        }
    };

    return (
        <div className="create-tasks-page">
            <Header
                title="Prioritization Matrix"
                paragraph="Welcome to the Prioritization App – the task manager that simplifies your to-do list by comparing tasks two at a time. Start by creating your tasks below. Note: hitting the refresh button will reset the app"
            />
            <div className="tasks-container">
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        taskName={task.text}
                        taskId={task.id}
                        onTaskChanged={handleTaskChanged}
                        onTaskDeleted={handleTaskDeleted}
                    />
                ))}
            </div>
            <CreateTaskButton onPressed={addTask} />
            {tasks.length > 1 && (
                <div className="prioritize-button-container">
                    <PrioritizeButton onPressed={startPrioritization} />
                </div>
            )}
        </div>
    );
};

export default CreateTasksPage;