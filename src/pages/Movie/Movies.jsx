import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilmsList from 'components/FilmsList/FilmsList';
import Form from 'components/Form/Form';
import { getMovieByQuery } from 'services/TmbdApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await getMovieByQuery(currentQuery);
        setMovies(movieByQuery);
      } catch (evt) {
        console.log(evt);
      }
    };
    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <>
      <Form setSearchParams={setSearchParams} />
      {movies.length > 0 && <FilmsList movies={movies} />}
    </>
  );
};

export default Movies;