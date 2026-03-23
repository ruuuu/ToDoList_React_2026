import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';


// точка входа 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDoListPage  />                 {/*  вызываем фукнцию ToDoListPage */}
  </React.StrictMode>
);

// вся верстка хранится в комопентt App



