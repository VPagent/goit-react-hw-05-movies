import { Suspense} from 'react'
import { fetchFilmId } from 'components/services/API';
import { useEffect, useState } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';
import s from '../OneFilmPage/oneFilmPage.module.scss';
import { Oval } from 'react-loader-spinner';

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
  const getActiveClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };
  const { title, poster_path, genres, overview, vote_average, release_date } = currentFilm;
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const score = Math.floor(vote_average * 10);
  const genresItem = genres ? genres.map(elem => elem.name).join(' ') : '';
  const pathToBack = location.state?.prev || `/`;
  const year = release_date ? release_date.slice(0, 4) : "year" ;
  return (
    <div className={s.wrapper}>
      <Link to={pathToBack} className={s.backBtn}> go back </Link>
      <div className={s.filmCard}>
        <img src={poster} alt={title} width="300" />
        <div className={s.textWrapper}>
          <h2>
            <b>{`${title} (${year})`}</b>
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
        <NavLink to={`/movies/${filmId}/cast`} end state={location.state}className={getActiveClassName}>
          Cast
        </NavLink>
        <NavLink to={`/movies/${filmId}/reviews`} end state={location.state} className={getActiveClassName}>
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<Oval />}>
      <Outlet />
      </Suspense>
    </div>
  );
};

export default OneFilmPage;
