import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'       // classes это объект  в модульном scss(для инкапсуляции стилей)



export const Header = () => {

  //   деструктурировали свойств isActive из объекта,         объект со свойством  isActive типа boolean(аннотация типа (описываем структуру)))
  const getActiveClass = ({ isActive } : { isActive : boolean }): string => {
    
    return isActive ? `${classes.active} ${classes.link}` : classes.link
  };




  return (
    <header className={classes.header}>
        <div className={classes.container}>
          <NavLink className={ getActiveClass } to="/"> Home </NavLink>                         {/* с NavLink  ссылки буду работать без перезагрузки страницы, className={`${classes.link} ${classes.active}`} */}
          <NavLink className={ getActiveClass } to="/todo"> ToDo </NavLink>                     {/* getActiveClass то есть передаем ссылку на фукнцию,  а не вызываем ее. NavLink внутри себя сам вызовет эту функцию при изменении состояния ссылки , передав ей объект с параметрам { isActive } */}
        </div>
    </header> 
  )
} 