import { fetchCast } from "components/services/API"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import s from '../castPage/castPage.module.scss'



const Cast = () => {
    const [cast, setCast] = useState({})
    const {filmId} = useParams()
    const location = useLocation()

    useEffect(() => {
        fetchCast(filmId)
        .then(setCast)
    }, [filmId])
    
    if(!cast){
        return
    }
    return(
        <>
        <h4>Cast</h4>
        <ul className={s.list}>
        {cast.length > 0 && cast.map(hero => {
            const poster = `https://image.tmdb.org/t/p/w500${hero.profile_path}`
            return (
                <li key={hero.name} className={s.item}>
                    <img src={poster} alt={hero.name} width="100"/>
                    <div className={s.textWrapper}>
                        <p><b>{hero.name}</b></p>
                        <p>{`character: ${hero.character}`}</p>
                    </div>
                </li>
            )
        })}
        </ul>
        </>
    );
}

export default Cast