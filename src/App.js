import { Typography } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ThoughtForm from './components/ThoughtForm';
import ThoughtList from './components/ThoughtList';


const LOCAL_STORAGE_KEY='react-todo-list-todos';
const LOCAL_STORAGE_KEY2='react-tho-list-thos';


function App() {

  const [todos, setTodos]=useState([]);
  const [thos, setThos]= useState([]);

  //TODOS
  useEffect(() => {
    //add to local storage when app component mounts to the DOM
    const storageTodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos)
    {
      setTodos(storageTodos);
    }
  },[]);

  useEffect(() => {
    //add to local storage when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  },[todos]);
  
  //THOUGHTS
  useEffect(() => {
    const storageThos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2));
    if(storageThos)
    {
      setThos(storageThos);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(thos));
  },[thos]);


  //TODOs
  function addTodo(todo){
    //adds new todo at the beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id)
  {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  


  //Thoughts
  function addTho(tho){
    setThos([tho,...thos]);
  }

  function toggleCompleteTho(id)
  {
    setThos(
      thos.map(tho=>{
        if(tho.id===id){
          return{
            ...tho, 
            completed:!tho.completed
          };
        }
        return tho;
      })
    );
  }

  function removeTho(id){
    setThos(thos.filter(tho=>tho.id!==id));
  }


  return (
    <>
    <div className="App">
      <Typography style={{ padding: "16", fontSize:"50px", fontFamily: "'Permanent Marker', cursive",textAlign:"center"}} variant="h3">
        My Task
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
    <div className="App">
      <Typography style={{ padding: "16", fontSize:"50px", fontFamily: "'Permanent Marker', cursive",textAlign:"center" }} variant="h3">
        My Thoughts
      </Typography>
      <ThoughtForm addTho={addTho} />
      <ThoughtList
        thos={thos}
        removeTho={removeTho}
        toggleCompleteTho={toggleCompleteTho}
      />
    </div>
    </>
  );
}

export default App;
