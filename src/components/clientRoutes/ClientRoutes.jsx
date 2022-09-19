import Cast from "pages/castPage";
import OneFilmPage from "pages/OneFilmPage";
import ReviewsPage from "pages/reviewsPage";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/homePage/HomePage";
import  Movies  from "../../pages/moviesPage/MoviesPage";


const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movies/:filmId" element={<OneFilmPage/>}>
        <Route path="cast" element={<Cast />}/>    
        <Route path="reviews" element={<ReviewsPage />}/> 
      </Route>
      <Route path="/movies" element={<Movies />}/>
       
      
        
    
    </Routes>
  );
};

export default ClientRoutes
