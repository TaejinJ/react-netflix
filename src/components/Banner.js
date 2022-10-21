import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/request";

export default function Banner() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기(여러영화)
    const request = await axios.get(requests.fetchNowPlaying); //await을 사용하지않으면 (비동기처리를안하면)
    console.log(request);
  };

  return <div>Banner</div>;
}
