import "./GenreBadge.css"

import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export function GenresIds({genre_ids}) {

    const genres = useSelector(({genres}) => genres)

    const genresFilm = genre_ids.join(',');

    const genresName = genres.filter(value => genresFilm.indexOf(value.id) !== -1)

    // console.log(genre_ids)

    return (
        <div>
            {
                genresName.map(value =>
                    <Link to={{pathname: `/genre/id:${value.id}`, state: value.id}}><h5>{value.name}</h5></Link>)
            }
        </div>
    )
}