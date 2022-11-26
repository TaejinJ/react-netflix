import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";
import "./Banner.css";
export default function Banner() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    /** 현재 상영중인 영화 정보를 가져오기(여러영화)*/
    const request = await axios.get(requests.fetchNowPlaying); //await을 사용하지않으면 (비동기처리를안하면)
    /**여러 영화중 영화 하나의 ID를 가져오기*/
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    /**특정 영화의 더 상세한 정보를 가져오기(비디오 정보 포함) */
    //movieDetail안에 data들이 다들어감(구조분해할당)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: " videos" },
    });
    setmovie(movieDetail);
  };
  /**글자수 n자가 넘어가면 str의 length가 있을때 (str?.length) ...처리 */
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top_center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1>{movie.title || movie.name || movie.original_name}</h1>

        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button info">More Info</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}
