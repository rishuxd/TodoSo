import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import Addtodo from './Components/Addtodo';
import About from './Components/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todolist") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todolist"));
  }

  const onDelete = (todo) => {
    setTodolist(todolist.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }

  const addTodo = (title, desc) => {
    let sno = todolist.length + 1;
    const newtodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodolist([...todolist, newtodo]);
  }

  const [todolist, setTodolist] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <Router>
      <Header title="TodoSo" />

      <Routes>
        <Route path="/TodoSo"
          element={
            <>
              <Addtodo addTodo={addTodo} />
              <Todos todolist={todolist} onDelete={onDelete} />
            </>
          }
        />
        <Route exact path="/Readme"
          element={<About />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
