import { Link } from "react-router-dom";
import { imageURL } from "../../services/api/api";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./MovieCard.css";

function MovieCard({ movie }) {

    const { darkMode } = useContext(ThemeContext);
    
    return (
    <Link
    to={`/movie/${movie.id}`}
    className="card-link"
    >
    <div className={darkMode ? "movie-card dark-card" : "movie-card"}>

        <img
        src={imageURL + movie.poster_path}
        alt={movie.title}
        />

        <div className="card-content">
        <h3>{movie.title}</h3>

        <p> {movie.vote_average}</p>

        <div className="rating">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaRegStar color="gold" />
        </div>

        </div>
    </div>
    </Link>
);
}

export default MovieCard;