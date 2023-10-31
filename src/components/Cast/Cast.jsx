import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCastMovie } from 'services/TmbdApi';
import { List, Text } from './Cast.styled';
// import Loader from 'components/Loader/Loader';

export const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
export const PLACEHOLDER = 'https://via.placeholder.com/182x273';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
// const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCastMovie(movieId);
        setCast(cast);
      } catch (evt) {
        console.log(evt);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {
        <List>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <Text key={id}>
              <img
                src={`${
                  profile_path
                    ? BASE_POSTER_URL + profile_path
                    : PLACEHOLDER + '?text=' + original_name
                }`}
                alt={original_name}
              />
              <p>
                <span> Actor:</span> {original_name}
              </p>
              <p>
                <span>Character:</span> {character}
              </p>
            </Text>
          ))}
        </List>
      }
    </>
  );
};

export default Cast;
