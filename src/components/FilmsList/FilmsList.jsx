import { Link,  useLocation } from "react-router-dom"



const FilmsList = ({options}) => {
    
    const location = useLocation()
    return(
        <ul>
            {options.length > 0 && options.map(film =>
             <li key={film.id}><Link to={`/movies/${film.id}`} state={{prev: location}}>{film.title}</Link></li>
             )}
        </ul>
    )
}

export default FilmsList