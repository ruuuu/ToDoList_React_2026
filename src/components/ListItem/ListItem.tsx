import { ToDo } from "../../models/todo-item";
import classes from './ListItem.module.scss' 


//                      
export const ListItem  = (props: { todo: ToDo }) => {       // либо вместо props можно сразу деструктурировать: ({todo}: {todo : ToDo}) 

  return (
    <> 
      <a className={`${classes.link} ${props.todo.isDone ? classes.done : classes.notDone}`} href={`/list/${props.todo.id}`}> { props.todo.text } </a>
    </>
  )

};