import "./css/movie.scss";
import { useEffect, useState } from "react";
/* import PropTypes from "prop-types"; */
import {Link} from "react-router-dom";

function Movie({ medium_cover_image, title, summary, genres, id}) {
    
    return (
        <div className="movie_box_fr">
            <div className="img_box">
                <img src={medium_cover_image} alt={title}></img>
            </div>
            <div className="text_box">
                <h2 className="title_fr">
                    <Link className="title_link" to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p>{summary}</p>
                {<ul className="category"> Category : {genres && genres.map((gen)=> (<li key={gen}>{gen}</li>))}</ul>}
            </div>
        </div>
    );
}

/* Movie.propTypes = {
    id : PropTypes.number.isRequired,
    medium_cover_image : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
} */

export default Movie;