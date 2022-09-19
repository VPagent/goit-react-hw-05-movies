import { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm';
import { fetchQueryFilm } from 'components/services/API';
import FilmsList from 'components/FilmsList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [filter, setFilter] = useState(query);
  const [findedFilms, setFindedFilms] = useState([]);

  useEffect(() => {
    if (!filter) {
      return;
    }
    fetchQueryFilm(filter).then(setFindedFilms);
  }, [filter]);

  const handleSubmit = value => {
    setFilter(value);
  };

  return (
    <>
      <SearchForm onSubmitForm={handleSubmit} />
      <FilmsList options={findedFilms} />
    </>
  );
};

export default Movies;
