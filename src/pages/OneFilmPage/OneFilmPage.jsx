import { fetchFilmId } from 'components/services/API';
import { useEffect, useState } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';
import s from '../OneFilmPage/oneFilmPage.module.css';

const OneFilmPage = () => {
  const [currentFilm, setCurrentFilm] = useState({});
  const { filmId } = useParams();
  const location = useLocation();
  useEffect(() => {
    if (!filmId) {
      return;
    }
    fetchFilmId(filmId).then(setCurrentFilm);
  }, [filmId]);
  if (!currentFilm) {
    return;
  }
  const { title, poster_path, genres, overview, vote_average, release_date } =
    currentFilm;
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const score = Math.floor(vote_average * 10);
  const genresItem = genres ? genres.map(elem => elem.name).join(' ') : '';
  const pathToBack = location.state?.prev || `/`;
  return (
    <div>
      <Link to={pathToBack}> go back </Link>
      <div className={s.filmCard}>
        <img src={poster} alt={title} width="300" />
        <div>
          <h2>
            <b>{`${title} (${release_date})`}</b>
          </h2>
          <p>{`score: ${score}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresItem}</p>
        </div>
      </div>
      <div>
        <p>
          <b>Additional information</b>
        </p>
        <NavLink to={`/movies/${filmId}/cast`} end>
          Cast
        </NavLink>
        <NavLink to={`/movies/${filmId}/reviews`} end>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default OneFilmPage;
