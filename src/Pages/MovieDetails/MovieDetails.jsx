
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageURL } from "../../services/api/api";
import { FaStar, FaRegStar } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./MovieDetails.css";

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { darkMode } = useContext(ThemeContext);

    const [movie, setMovie] =
        useState(null);

    useEffect(() => {
        fetch(

        `https://api.themoviedb.org/3/movie/${id}?api_key=8b095b4536afd5e2236cc3998d1f2601&language=ar`
        )
        .then((res) => res.json())
        .then((data) =>
            setMovie(data)
        );
    }, [id]);

    if (!movie)
        return <h2>Loading...</h2>;

        return (
            <>
            <div className={darkMode ? "detailspage dark-detailspage" : "detailspage"}>

            <Navbar />

        <button className="back-btn" onClick={() => navigate(-1)}>
                Back To Home
                    </button>


                        <div className="details">

    <img
        src={imageURL + movie.poster_path}
        alt={movie.title}
    />

    <div className="info">

        <h1>{movie.title}</h1>

        <p className="tagline">{movie.tagline}</p>



        <p>Overview</p>
        <p>{movie.overview}</p>

        <h3>{movie.vote_average}</h3>

        <div className="rating">
        <FaStar color="gold" />
        <FaStar color="gold" />
        <FaStar color="gold" />
        <FaStar color="gold" />
        <FaRegStar color="gold" />
        </div>

        <div className="details-box">

        <p><span> Release:</span> {movie.release_date}</p>

        <p><span>Runtime:</span> {movie.runtime} min</p>

        <p><span> Language:</span> {movie.original_language}</p>

        <p><span> Genres:</span> {movie.genres?.map(g => g.name).join(" / ")}</p>

        <p><span> Votes:</span> {movie.vote_count}</p>

        </div>

    </div>
</div>

<Footer />
</div>
        </>
    );
    }

    export default MovieDetails;