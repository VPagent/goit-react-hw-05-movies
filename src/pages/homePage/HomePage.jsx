import FilmsList from "components/FilmsList"
import {fetchTrendFimls} from "components/services/API"
import { useEffect, useState } from "react"


const Home = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetchTrendFimls().then(setFilms)
        // eslint-disable-next-line
    }, [])

    if(!films.length){
        return
    }
    return(
        <>
        <h1>Trending today</h1>
        <FilmsList options={films} />
        </>
    )
}

// films.length > 0 && 

export default Home