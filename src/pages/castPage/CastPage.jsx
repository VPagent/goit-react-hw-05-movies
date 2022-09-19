import { fetchCast } from "components/services/API"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Cast = () => {
    const [cast, setCast] = useState({})
    const {filmId} = useParams()

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
        <ul>
        {cast.length > 0 && cast.map(hero => {
            const poster = `https://image.tmdb.org/t/p/w500${hero.profile_path}`
            return (
                <li key={hero.name}>
                    <img src={poster} alt={hero.name} width="100"/>
                    <p>{hero.name}</p>
                    <p>{`character: ${hero.character}`}</p>
                </li>
            )
        })}
        </ul>
        </>
    );
}

export default Cast