import React from "react";
import "./App.css";

import { GAMES, PLATFORMS, GENRES } from "./Constants/constants";

import Row from "./Components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>GameFlix</h1>
      <Row title={GAMES} fetchUrl={requests.getListOfGames} />
      <Row title={GENRES} isGenre={true} fetchUrl={requests.getAllGeneres} />
      <Row title={PLATFORMS} fetchUrl={requests.getPlatforms} />
    </div>
  );
}

export default App;
