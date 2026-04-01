import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { ToDo } from './models/todo-item';



// точка входа 


 const todosArray: ToDo[]  = [
    {       // у элементов массива тип будет  ToDo
      id: 0,
      text: 'Первая задача',
      isDone: false
    },
    {       
      id: 1,
      text: 'Вторая задача',
      isDone: true
    },
    {       
      id: 2,
      text: 'Третья задача',
      isDone: false
    },
    {       
      id: 3,
      text: 'Четвертая задача',
      isDone: true
    }
  ];






const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage todosArray={todosArray} />} />      {/*  вызываем фукнцию HomePage */}
        <Route path="/todo" element={<ToDoListPage />} />             
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// вся верстка хранится в комопентt App



