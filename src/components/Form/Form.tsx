import './Form.scss'
import { useState } from 'react';



export const Form = (props: { createNewToDo: Function}) => {      //   функцию передаем 

  const [text, setText] = useState<string>('')     // переменная состояния(обновляется асинхронно), указываем ее тип 


  const formSubmit = () => {          // отправка формы
    
    if(text){
      props.createNewToDo(text)
      setText('')         // очищаем поле
    }
  };


  

  return (
    <div className="form-wrapper">
        <form action="#" onSubmit={formSubmit}>
            <label>
                <input type="text" onChange={(evt) => setText(evt.target.value)} value={text} />
                <button></button>
            </label>
        </form>
    </div>
  )

}