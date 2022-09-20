
import {Route, Routes} from "react-router-dom";
import { Oval } from 'react-loader-spinner'
import { lazy, Suspense} from 'react'

const HomePage = lazy(()=> import('pages/homePage/HomePage'))
const Movies = lazy(() => import('pages/moviesPage/MoviesPage'))
const OneFilmPage = lazy(() => import('pages/OneFilmPage'))
const Cast = lazy(() => import('pages/castPage'))
const ReviewsPage = lazy(() => import('pages/reviewsPage'))


const ClientRoutes = () => {
  return (
    <Suspense fallback={<Oval />}>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/movies/:filmId" element={<OneFilmPage/>}>
        <Route path="cast" element={<Cast />}/>    
        <Route path="reviews" element={<ReviewsPage />}/> 
      </Route>
      <Route path="/movies" element={<Movies />}/>
    </Routes>
    </Suspense>
    
  );
};

export default ClientRoutes
