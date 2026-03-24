import './Form.scss'
import { ChangeEvent } from 'react';



export const Form = (props: { createNewToDo: Function}) => {      //   функцию передаем 

  let createText = ''   // введенное значение в поле



  const formSubmit = () => {          // отправка формы
    console.log(createText)

  };


  const changeText = (evt: ChangeEvent<HTMLInputElement>) => {
    createText = evt.target.value
  };



  return (
    <div className="form-wrapper">
        <form action="#" onSubmit={formSubmit}>
            <label>
                <input type="text" onInput={changeText}  />
                <button></button>
            </label>
        </form>
    </div>
  )

}