var axios = require("axios");


  const fetchPlaylist = async (req, res) => {
    try {
      const playlist = await axios.get(`${req.body.tracklist}`);
      res.status(200).json(playlist.data);
    } catch (error) {
      res.status(400).json(error);
    }
}

const addPlaylist = async (req, res) => {
  try {
      const addTrack = await axios.post(
          `https://api.deezer.com/user/${req.body.id}/playlists?title=${req.body.playlistName}&access_token=${req.body.accessToken}`
      );
      res.status(200).json(addTrack.data);
  } catch (error) {
      res.status(400).json(error);
  }
}

const addPlaylistTrack = async (req, res) => {
  try {
      const addTrack = await axios.post(
          `https://api.deezer.com/playlist/${req.body.playlistId}/tracks?songs=${req.body.trackId}&access_token=${req.body.accessToken}`
      );
      res.status(200).json(addTrack.data);
  } catch (error) {
      res.status(400).json(error);
  }
}


const addFavTrack = async (req, res) => {
  try {
      const addFavTrack = await axios.post(
          `https://api.deezer.com/user/${req.body.id}/tracks?track_id=${req.body.trackId}&access_token=${req.body.accessToken}`
      );
      res.status(200).json(addFavTrack.data);
  } catch (error) {
      res.status(400).json(error);
  }
}

const deletePlaylist = async (req, res) => {
  try {
      const deleteTrack = await axios.delete(
          `https://api.deezer.com/playlist/${req.body.playlistId}?access_token=${req.body.accessToken}`
      );
      if (deleteTrack.data.error) {
          return res.status(400).json(deleteTrack.data.error);
      }
      res.status(200).json(deleteTrack.data);
  } catch (error) {
      res.status(400).json(error);
  }
}

const deletePlaylistTrack = async (req, res) => {
  try {
      const deleteTrack = await axios.delete(
          `https://api.deezer.com/playlist/${req.body.playlistId}/tracks?songs=${req.body.playlistTrackId}&access_token=${req.body.accessToken}`
      );
      res.status(200).json(deleteTrack.data);
  } catch (error) {
      res.status(400).json(error);
  }
}

const deleteOtherUsersPlaylists = async (req, res) => {
  try {
      const deleteOtherPlaylists = await axios.delete(
          `https://api.deezer.com/user/${req.body.id}/playlists?playlist_id=${req.body.playlistId}&access_token=${req.body.accessToken}`
      );
      if (deleteOtherPlaylists.data.error) {
          return res.status(400).json(deleteOtherPlaylists.data.error);
      }
      res.status(200).json(deleteOtherPlaylists.data);
  } catch (error) {
      res.status(400).json(error);
  }
}

  module.exports = {fetchPlaylist, addPlaylist, addPlaylistTrack, addFavTrack, deletePlaylist, deletePlaylistTrack, deleteOtherUsersPlaylists}