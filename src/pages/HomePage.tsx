// import { NavLink } from "react-router-dom";
import { ToDo } from "../models/todo-item"
import { ListItem } from "../components/ListItem/ListItem";



export const HomePage = (props: { todosArray: ToDo[] }) => {        // у массива элементы типа ToDo



  


  return (
    <div className="container"> 
      { 
        props.todosArray.map((todo: ToDo, index: number) => {
          return (
            <ListItem todo={todo} key={index}/> 
          )
        }) 
      }
    </div>
  )

}