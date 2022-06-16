import { useState } from 'react';
import './App.css';
import Form from './components/Form'
import Post from './components/Post';
import TaskList from './components/TaskList';

function App() {


  const [taskList, setTaskList] = useState([])


  return (
    <div>
      <h1>Prueba Técnica</h1>
      <Form taskList={taskList} setTaskList={setTaskList} />
      <div className="items">
        {
          taskList.map((data, index) => {
            return <TaskList {...data} index={index} taskList={taskList} setTaskList={setTaskList} />
          })
        }
      </div>

      <Post />

    </div>
  );
}

export default App;
