import { useState } from "react"
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"





export const ToDoListPage = () => {

  const [todosArray, setTodosArray] = useState<ToDo[]>([    //  указали тип элемнтов массива
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
  ])

  

  const createNewToDo = (text: string) => {
    
    const newToDo: ToDo = { id: todosArray.length, text: text, isDone: false }    
    
    setTodosArray([...todosArray, newToDo])       // обновили перем состояния
    console.log('todosArray после добавления элемента', todosArray)
  };



  const updateToDo = (toDoItem: ToDo) => {   // при нажатии на галочку(isDone=true) 
    console.log('update')
    console.log(toDoItem)
  };



  const deleteToDo = (toDoItem: ToDo) => {
    console.log('delete')
    console.log(toDoItem)
  };



  return (
    <> 
        <Header />
        <Form createNewToDo={createNewToDo} />
        <ToDoList todos={todosArray} />
    </>
    
  )
}