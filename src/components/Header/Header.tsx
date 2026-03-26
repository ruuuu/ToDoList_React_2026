import { Link, NavLink } from 'react-router-dom'
import  classes from './Header.module.scss'       // classes это объект



export const Header = () => {

  return (
    <header className={classes.header}>
        <div className={classes.container}>
          <NavLink className={() => 'active'} to="/"> Home </NavLink>            {/* ссылки буду работать без перезагрузки страницы, className={`${classes.link} ${classes.active}`} */}
          <NavLink className={`${classes.link} ${classes.active}`} to="/todo"> ToDo </NavLink>
        </div>
    </header> 
  )
} 