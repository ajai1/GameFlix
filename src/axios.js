import axios from "axios";

const instance = axios.create({
  baseURL: "https://rawg-video-games-database.p.rapidapi.com",
  headers: {
    "content-type": "application/json",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key": "bcc1e03d10msha9fec7c4a41fb1ep106e29jsna354e10b941d",
    useQueryString: true,
  },
});

export default instance;
