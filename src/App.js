import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form/Form';
import ListItem from './components/ListItem/ListItem';
import ButtonMenu from './components/BottomMenu/BottomMenu.js'
import { useDispatch } from 'react-redux'
import { addNewTasks, clearAllTasks, deleteElement } from './store/todoSlice'



function App() {
  const [text, getValueText] = useState('');
  const dispatch = useDispatch()

  const addTask = () => dispatch(
    addNewTasks(text),
    getValueText(''),
  );

  const clearAll = () => dispatch(clearAllTasks());

  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-blue-300">
      <div className=" p-6  bg-blue-50">
        <Title />
        <Form text={text} getValueText={getValueText} addTask={addTask} />
        <ListItem deleteElement={deleteElement} />
        <ButtonMenu clearAll={clearAll} />
      </div>
    </div>
  )
}

export default App;
