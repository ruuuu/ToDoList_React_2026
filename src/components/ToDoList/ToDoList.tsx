import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'



interface ToDo {
  id: number,
  text: string, 
  isDone: boolean
}




export const ToDoList = () => {

  const todo1: ToDo = {       // у объекта тип ToDo
    id: 1,
    text: 'Первая задача',
    isDone: false
  }

  return (
    <div className="todo-container">
        <ul className="todo-list failed">
            <ToDoListItem toDoItem={todo1} />      {/* передача атрибутов  */}
        </ul>
        <ul className="todo-list completed">
          {/* <ToDoListItem text="Мой текст" /> */}
        </ul>
    </div>
  )

}