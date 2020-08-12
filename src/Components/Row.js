import React, { useState, useEffect, Fragment } from "react";
import axios from "../axios";

import genresback from "../images/GenresBack.jpg";
import { GAMES, PLATFORMS, GENRES } from "../Constants/constants";
import "./Row.css";

function Row({ title, fetchUrl, isGenre }) {
  const [games, setGames] = useState([]);
  let backgroundImage = "";

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      console.log(fetchUrl, " : ", res.data.results);

      setGames(res.data.results);
      return res;
    }
    fetchData();
  }, [fetchUrl]);

  const clickHandler = (game) => {
    alert("Clicked : " + game.name);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      {isGenre || title === PLATFORMS ? (
        <div className="row__posters__genres">
          {games.slice(0, 15).map((game) => (
            <div
              className="row__poster__genres"
              key={game.id}
              onClick={() => clickHandler(game)}
            >
              <img
                className="row__poster__genresImage"
                src={game.background_image ? game.background_image : genresback}
                alt={game.name}
              ></img>
              <div className="image__title">{game.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="row__posters">
          {games.map((game) => (
            <img
              className="row__poster"
              key={game.id}
              src={game.background_image ? game.background_image : genresback}
              alt={game.name}
            ></img>
          ))}
        </div>
      )}
    </div>
  );
}

export default Row;
