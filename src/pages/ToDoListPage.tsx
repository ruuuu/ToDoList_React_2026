import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"





export const ToDoListPage = () => {

  const todosArray: ToDo[]  = [
    {       // у объекта тип ToDo
      id: 0,
      text: 'Первая задача',
      isDone: false
    },
    {       
      id: 1,
      text: 'Вторая задача',
      isDone: false
    },
    {       
      id: 2,
      text: 'Третья задача',
      isDone: true
    },
    {       
      id: 3,
      text: 'Четвертая задача',
      isDone: true
    }
  ];



  const createNewToDo = (text: string) => {
    console.log(text)
  };



  return (
    <> 
        <Header />
        <Form createNewToDo={createNewToDo} />
        <ToDoList todos={todosArray} />
    </>
    
  )
}