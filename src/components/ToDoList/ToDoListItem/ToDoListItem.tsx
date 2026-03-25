import { ToDo } from '../../../models/todo-item'
import './ToDoListItem.scss'
import { toast } from 'react-toastify';



export const ToDoListItem = (props: { toDoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {        // props передаем как параметр


  const notify_delete = () => {
    toast("Задача удалена!");
  }


  return (
    <li className="todo-list-item__wrapper">
      <span> {props.toDoItem.text} </span>
      <div className="todo-list-item__buttons">
        <button className="btn-trash"  
          onClick={() => {
            props.deleteToDo(props.toDoItem);
            notify_delete()
          }}>
        </button>             {/* передаем коллбэк(в реакт надо передавать в обработчик ссылку на функцию), чтобы функция вызывалась при клике, а не сразу при рендеринге(то есть сразу вызовется) */}
         
        <button className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}  onClick={() => props.updateToDo(props.toDoItem)}></button>
      </div>
    </li>
  )

}

