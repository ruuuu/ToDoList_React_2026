import { ToDo } from "../../models/todo-item";

//                      
export const ListItem  = (props: { todo: ToDo }) => {       // либо вместо props можно сразу деструктурировать: ({todo}: {todo : ToDo}) 

  return (
    <> 
      <a href={`/list/${props.todo.id}`}> { props.todo.text } </a>
    </>
  )

};