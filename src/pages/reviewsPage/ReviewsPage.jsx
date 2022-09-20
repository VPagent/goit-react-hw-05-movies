import Nothing from 'components/Nothing'
import { fetchReviews } from 'components/services/API'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import s from '../reviewsPage/reviewsPage.module.scss'


const RewiewsPage = () => {
    const [reviews, setReviews] = useState({})
    const {filmId} = useParams()
    useEffect(()=> {
        fetchReviews(filmId)
        .then(setReviews)
    }, [filmId])

    if(!reviews){
        return
    }

    return(
        <>
        {reviews.length > 0 
            ? <ul className={s.list}>{reviews.map(review => 
                <li key={review.author} className={s.item}>
                <p><b>{`Author: ${review.author}`}</b></p>
                <p>{review.content}</p>
                </li>)} 
            </ul>
            : <Nothing />
         }
        </>
    )
}

export default RewiewsPage