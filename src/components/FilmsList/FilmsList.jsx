import { Link,  useLocation } from "react-router-dom"
import s from '../FilmsList/filmsList.module.scss'



const FilmsList = ({options}) => {
    
    const location = useLocation()
    return(
        <div className={s.container}>
        <ul className={s.list}>
            {options.length > 0 && options.map(film => {
                const { title, poster_path, vote_average, release_date } = film;
                const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
                const score = Math.floor(vote_average * 10);
                const year = release_date ? release_date.slice(0, 4) : "year" ;
            return(
                <li key={film.id} className={s.item}>
                 <Link to={`/movies/${film.id}`} state={{prev: location}}className={s.link}>
                    <img src={poster} alt={title} />
                    <div className={s.textWrapper}>
                        <h2>{film.title}({year})</h2>
                        <p><b>Score:</b>{score}%</p>
                    </div>
                    
                 </Link></li>
            )})}
        </ul>
        </div>
    )
}

export default FilmsList