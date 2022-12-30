import axios from "axios";

/**axios 의 인스턴스화 중복된 baseURL을 매번 사용하지않게 하기위해서 .  */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: "ko-KR",
  },
});

export default instance;