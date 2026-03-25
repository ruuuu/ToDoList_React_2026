import { ToDo } from '../../../models/todo-item'
import './ToDoListItem.scss'




export const ToDoListItem = (props: { toDoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {        // props передаем как параметр

  console.log(props)



  return (
    <li className="todo-list-item__wrapper">
      <span> {props.toDoItem.text} </span>
      <div className="todo-list-item__buttons">
        <button className="btn-trash"  onClick={() => props.deleteToDo(props.toDoItem)}></button>             {/* передаем коллбэк(в реакт надо передавать в обработчик ссылку на функцию), чтобы функция вызывалась при клике, а не сразу при рендеринге(то есть сразу вызовется) */}
        <button className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}  onClick={() => props.updateToDo(props.toDoItem)}></button>
      </div>
    </li>
  )

}

