
import { NavLink } from "react-router-dom"
import s from '../Header/header.module.scss'

 

const Header = () => {

    const getActiveClassName = ({ isActive }) => {
        return isActive ? `${s.link} ${s.active}` : s.link;
    };

    return(
        <header>
         <NavLink to="/" className={getActiveClassName} end> Home </NavLink>
         <NavLink to="/movies"className={getActiveClassName}> Movies </NavLink>
        </header>
    )
}


export default Header