import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"




export const ToDoList = (props: { todos: ToDo[] }) => {     // массив элементов типа ToDo

  


  
  const checkedList = () => {     // выполненные заадчи
    return props.todos
              .filter((item) => item.isDone === true)  
              .map((todo, index) => {
                return (
                  <ToDoListItem toDoItem={todo} key={index} />    //  атрибуты передаем
              )
            })
  };



  const uncheckedList = () => {     // Невыполненные заадчи
    return props.todos
              .filter((item) => item.isDone === false)  
              .map((todo, index) => {
                return (
                  <ToDoListItem toDoItem={todo} key={index} />    
                )
            })
  };

  

  return (
    <div className="todo-container">
        <ul className="todo-list failed">
          { checkedList() }
        </ul>
        <ul className="todo-list completed">
          { uncheckedList() }
        </ul>
    </div>
  )

}