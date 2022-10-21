import axios from "axios";

/**axios 의 인스턴스화 중복된 baseURL을 매번 사용하지않게 하기위해서 .  */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "5dfb09277c34ea9b7c254477b33b46d5",
    language: "ko-KR",
  },
});

export default instance;
