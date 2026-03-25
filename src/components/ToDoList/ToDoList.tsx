import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"
import { ToastContainer } from 'react-toastify';



export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {     // массив элементов типа ToDo

  


  
  const checkedList = () => {     // выполненные заадчи
    return props.todos
              .filter((item) => item.isDone === true)  
              .map((todo, index) => {
                return (
                  <ToDoListItem toDoItem={todo} key={index} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo} />    //  атрибуты передаем
                )
            });
  };



  const uncheckedList = () => {     // Невыполненные заадчи
    return props.todos
              .filter((item) => item.isDone === false)  
              .map((todo, index) => {
                return (
                  <ToDoListItem toDoItem={todo} key={index} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo} />    
                )
            });
  };

  

  return (
    <div className="todo-container">
        <ul className="todo-list failed">
          { checkedList() }
        </ul>
        <ul className="todo-list completed">
          { uncheckedList() }
        </ul>
        <ToastContainer position="bottom-right" />
    </div>
  )

}