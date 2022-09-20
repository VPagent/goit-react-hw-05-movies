import FilmsList from "components/FilmsList"
import {fetchTrendFimls} from "components/services/API"
import { useEffect, useState } from "react"
import s from '../homePage/homePage.module.scss'

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
        <h1 className={s.homeTitle}>Trending today</h1>
        <FilmsList options={films} />
        
        </>
    )
}

// films.length > 0 && 

export default Home