import { Link,  useLocation } from "react-router-dom"
import s from '../FilmsList/filmsList.module.css'



const FilmsList = ({options}) => {
    
    const location = useLocation()
    return(
        <ul className={s.list}>
            {options.length > 0 && options.map(film =>
             <li key={film.id} className={s.item}><Link to={`/movies/${film.id}`} state={{prev: location}}className={s.link}>{film.title}</Link></li>
             )}
        </ul>
    )
}

export default FilmsList