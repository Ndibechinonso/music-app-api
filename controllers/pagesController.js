var axios = require("axios");

 
 const fetcHomeData = async (req, res) => {
    try {
      const token = req.body.accessToken;
      const id = req.body.userId;
      const recommendedAlbums = await axios.get(
        `https://api.deezer.com/user/${id}/recommendations/albums?access_token=${token}`
      );

      if (recommendedAlbums.data.error) {
        return res.status(400).json(recommendedAlbums.data.error);
      }
  
      const lastPlayed = await axios.get(
        `https://api.deezer.com/user/${id}/history?access_token=${token}`
      );
      if (lastPlayed.data.error) {
        return res.status(400).json(lastPlayed.data.error);
      }
  
      const recommendedReleases = await axios.get(
        `https://api.deezer.com/user/${id}/recommendations/releases?access_token=${token}`
      );
      if (recommendedReleases.data.error) {
        return res.status(400).json(recommendedReleases.data.error);
      }
      
      const playlists = await axios.get(
        `https://api.deezer.com/user/${id}/playlists?access_token=${token}`
      );
      if (playlists.data.error) {
        return res.status(400).json(playlists.data.error);
      }
  
      const results = {
        recommendedAlbums:  recommendedAlbums.data,
        lastPlayed: lastPlayed.data,
        recommendedTracks: recommendedReleases.data,
        playlistsData: playlists.data,
      };
  
      res.status(200).json(results);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  const fetchArtistData = async (req, res) =>{
    try {
      const token = req.body.accessToken;
      const id = req.body.userId;
  
      const artists = await axios.get(
        `https://api.deezer.com/user/${id}/artists?access_token=${token}`
      );
      if (artists.data.error) {
        return res.status(400).json(artists.data.error);
      }
  
      const recommendedArtists = await axios.get(
        `https://api.deezer.com/user/${id}/recommendations/artists?access_token=${token}`
      );
      if (recommendedArtists.data.error) {
        return res.status(400).json(recommendedArtists.data.error);
      }
        
      const results = {
        artistsData: artists.data,
        recommendedArtistsData: recommendedArtists.data,
      };

      res.status(200).json(results);
    } catch (error) {
      res.status(400).json(error);
    }
  }


  const fetchPalylistPageData = async (req, res) => {
    try {
      const token = req.body.accessToken;
      const id = req.body.userId;
  
      const playlists = await axios.get(
        `https://api.deezer.com/user/${id}/playlists?access_token=${token}`
      );
      if (playlists.data.error) {
        return res.status(400).json(playlists.data.error);
      }
  
      const recommendedPlaylists = await axios.get(
        `https://api.deezer.com/user/${id}/recommendations/playlists?access_token=${token}`
      );
      if (recommendedPlaylists.data.error) {
        return res.status(400).json(recommendedPlaylists.data.error);
      }
  
      const results = {
        playlistsData: playlists.data,
        recommendedPlaylistsData: recommendedPlaylists.data,
      };

      res.status(200).json(results);
    } catch (error) {
      res.status(400).json(error);
    }
  }

const fetchGenrePageData = async (req, res) => {
    try {
      const token = req.body.accessToken;
      const id = req.body.userId;
  
      const genre = await axios.get(
        `https://api.deezer.com/genre?access_token=${token}`
      );
      if (genre.data.error) {
        return res.status(400).json(genre.data.error);
      }
  
      const charts = await axios.get(
        `https://api.deezer.com/user/${id}/charts?access_token=${token}`
      );
      if (charts.data.error) {
        return res.status(400).json(charts.data.error);
      }
  
      const results = {
        genre: genre.data,
        charts: charts.data,
      };

      res.status(200).json(results);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  module.exports = {fetcHomeData, fetchArtistData, fetchPalylistPageData, fetchGenrePageData}