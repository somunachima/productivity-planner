// Importing Components
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
// Importing React Hooks
import { useState, useEffect } from 'react';
// Importing Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
function App() {
    // All States
    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const [tasks, setTasks] = useState([]); // Task State
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form
    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3500);
    }, []);
    return (
      <>
        <div className="container">
          {/* App Header */}
          <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
          {/* Revealing the Add Task Form */}
          {showAddTask && <AddTask onSave={addTask} />}

          {/* Displaying Tasks */}
          {
            tasks.length > 0 ?
              (<Tasks tasks={tasks} />) :
              ('No Task Found!')
          }
        </div>
      </>
  )
}
export default App;
