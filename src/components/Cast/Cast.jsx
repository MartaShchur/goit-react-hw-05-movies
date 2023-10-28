import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchActors } from "TmbdApi";
import { List, Text } from './Cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
    const [movieId] = useParams();
    const [actors, setActors] = useState([]);
    const [loadind, setLoading] = useState(false);

    useEffect(() => {
        const onActorsOfMovie = () => {
            setLoading(true);

            fetchActors(movieId)
                .then(actors => {
                    setActors(actors);
                })
                .catch(error => {
                    console.log(error);

                })
                .finally(() => {
                    setLoading(false);
                });
        };

        onActorsOfMovie();
    }, [movieId]);

    return (
        <div>
            {loadind && <Loader />}

            <List>
                {actors.map(({ id, profile_path, original_name, name, character }) => (
                    <li key={id}>
                        <img
                            width="200px"
                            src={
                                profile_path
                                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                                    : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                            }
                            alt={original_name}
                        />
                        <Text>{name}</Text>
                        <Text>Character: {character}</Text>
                    </li>
                ))}
            </List>
        </div>
    );
};

export default Cast;