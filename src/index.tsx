import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { ToDoList } from './pages/ToDoList';


// точка входа 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDoList  />                 {/*  вызываем фукнцию App */}
  </React.StrictMode>
);

// вся верстка хранится в комопентt App



