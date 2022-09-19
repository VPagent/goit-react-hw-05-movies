import axios from 'axios'

const PRIVATE_KEY = "19058b9145b7ba2d69dc054625243cc3"
export const fetchTrendFimls = async () => {
    const link = `https://api.themoviedb.org/3/trending/movie/day?api_key=${PRIVATE_KEY}`
    try{
        const response = await axios.get(link)
        return response.data.results
    }catch{console.log("Error")}
}   

export const fetchQueryFilm = async (value) => {
    const link = `https://api.themoviedb.org/3/search/movie?api_key=${PRIVATE_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
    try{
        const response = await axios.get(link)
        return response.data.results
    }catch{console.log("Error")}
}

export const fetchFilmId = async (id) => {
    const link = `https://api.themoviedb.org/3/movie/${id}?api_key=${PRIVATE_KEY}&language=en-US`
    try{
        const response = await axios.get(link)
        return response.data
    }catch{console.log("Error")}
}

export const fetchCast = async (id) => {
    const link = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${PRIVATE_KEY}&language=en-US`
    try{
        const response = await axios.get(link)
        return response.data.cast
    }catch{console.log("Error")}
}

export const fetchReviews = async (id) => {
    const link = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${PRIVATE_KEY}&language=en-US&page=1`
    try{
        const response = await axios.get(link)
        console.log(response.data.results)
        return response.data.results
    }catch{console.log("Error")}
}
