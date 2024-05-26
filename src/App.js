import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateTasksPage from './Pages/CreateTasksPage';
import ComparePage from './Pages/ComparePage';
import ResultsPage from './Pages/ResultsPage';
import { useTasks } from './Services/TasksService';
import './App.css';

const App = () => {
    const {
        tasks,
        addTask,
        changeTaskName,
        deleteTask,
        getTaskComparisons,
        finalizeTaskComparisons,
        orderedTasks
    } = useTasks();

    return (
        <div className='app'>
            <Router>
                <div>
                    <Routes>
                        <Route exact path="/" element={<CreateTasksPage tasks={tasks} addTask={addTask} changeTaskName={changeTaskName} deleteTask={deleteTask} />} />
                        <Route path="/compare" element={<ComparePage getTaskComparisons={getTaskComparisons} finalizeTaskComparisons={finalizeTaskComparisons} />} />
                        <Route path="/result" element={<ResultsPage orderedTasks={orderedTasks} />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;
