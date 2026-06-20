
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import MovieCard from "../../components/MovieCard/MovieCard";
import { movieAPI } from "../../services/api/api";
import Footer from "../../components/Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Home.css";


function Home() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const { darkMode } = useContext(ThemeContext);

useEffect(() => {
    fetch(movieAPI)
    .then((res) => res.json())
    .then((data) =>
        setMovies(data.results)
);
}, []);

const filteredMovies =
    movies.filter((movie) =>
    movie.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

return (

    <>
    <div className={darkMode ? "page dark-page" : "page"}>
    <Navbar
        search={search}
        setSearch={setSearch}
    />

    <div className="movies-container">
        {filteredMovies.map((movie) => (
        <MovieCard
            key={movie.id}
            movie={movie}
        />
        ))}
    </div>

    <Footer />
    </div>
    </>
);
}

export default Home;