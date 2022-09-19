import { fetchReviews } from 'components/services/API'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


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
            ? <ul>{reviews.map(review => 
                <li key={review.author}>
                <p><b>{`Author: ${review.author}`}</b></p>
                <p>{review.content}</p>
                </li>)} 
            </ul>
            : <div>Nothing</div>
         }
         </>

    )
}

export default RewiewsPage