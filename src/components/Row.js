import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import MovieModal from "./MovieModal";
import "./Row.css";
export default function Row({ isLargeRow, title, id, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        console.log("request", request);
        setMovies(request.data.results);
    };

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    };

    return (
        <section className="row">
            <h2>{title}</h2>

            <div id={id} className="row__posters">
                {movies?.map((movie) => (

                    <img
                        key={movie.id}
                        style={{ padding: "25px 0" }}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path
                            } `}
                        alt={movie.name}
                        onClick={() => handleClick(movie)}
                    />

                ))}
            </div>


            {modalOpen && (
                <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
            )}
        </section>
    );
}