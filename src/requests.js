const APIKEY = "bcc1e03d10msha9fec7c4a41fb1ep106e29jsna354e10b941d";

const requests = {
  getListOfGames: `/games`,
  getScreenShots: `/games/{game_pk}/screenshots`,
  getStores: `/games/{game_pk}/stores`,
  getSelectedGame: `/games/{id}`,
  getGameTrailer: `/games/{id}/movies`,
  getSimilarGames: `/games/{id}/suggested`,
  getGameVideosYoutube: `/games/{id}/youtube`,
  getAllGeneres: `/genres`,
  getDetailsOfGenere: `/genres/{id}`,
  getPlatforms: `/platforms`,
  getListOfPublishers: `/publishers`,
  getSelectedPublisher: `/publishers/{id}`,
  getListOfStores: `/stores`,
  getStore: `/stores/{id}`,
};

export default requests;
