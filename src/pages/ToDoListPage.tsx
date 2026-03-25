import { useState } from "react"
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"





export const ToDoListPage = () => {

  const [todosArray, setTodosArray] = useState<ToDo[]>([])   //  указали тип элемнтов ToDo[] массива
    
 

  

  const createNewToDo = (text: string) => {
    
    const newToDo: ToDo = { id: todosArray.length, text: text, isDone: false }    
    
    setTodosArray([...todosArray, newToDo])       // обновили перем состояния
    console.log('todosArray после добавления элемента', todosArray)     // React не обновляет состояние синхронно сразу после вызова setTodosArray(), он планирует обновление, затем при след рендеринге обновит.
  };



  const updateToDo = (toDoItem: ToDo) => {   // при нажатии на галочку(isDone=true) 
    console.log('update')
   
    const newArray  = todosArray.map((item) => {
      if(item.id === toDoItem.id){
        item.isDone = !toDoItem.isDone
      }

      return item 
    });

    setTodosArray(newArray)  // обновили перем состояния
  };




  
  const deleteToDo = (toDoItem: ToDo) => {
    console.log('delete')
   
    const filterTodosArray = todosArray.filter((item) => item.id !== toDoItem.id)
    setTodosArray(filterTodosArray)     // обновляем  перем состояния
  };



  return (
    <> 
        <Header />
        <Form createNewToDo={createNewToDo} />
        <ToDoList todos={todosArray} updateToDo={updateToDo} deleteToDo={deleteToDo} />
    </>
    
  )
}