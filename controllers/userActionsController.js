var axios = require("axios");


  const fetchPlaylist = async (req, res) => {
    try {
      const trackcode = req.body.tracklist;
  
      const playlist = await axios.get(`${trackcode}`);
  
      res.status(200).json(playlist.data);
    } catch (error) {
      res.status(400).json(error);
    }
}

const addPlaylist = async (req, res) => {
  try {
      const id = req.body.id;
      const playlistName = req.body.playlistName;

      const accessToken = req.body.accessToken;

      const addTrack = await axios.post(
          `https://api.deezer.com/user/${id}/playlists?title=${playlistName}&access_token=${accessToken}`
      );

      res.status(200).json(addTrack.data);
  } catch (error) {
      res.status(400).json(error);
  }
}

const addPlaylistTrack = async (req, res) => {
  try {
      const playlistId = req.body.playlistId;
      const playlistTrackId = req.body.trackId;
      const accessToken = req.body.accessToken;

      const addTrack = await axios.post(
          `https://api.deezer.com/playlist/${playlistId}/tracks?songs=${playlistTrackId}&access_token=${accessToken}`
      );
      res.status(200).json(addTrack.data);
  } catch (error) {
      res.status(400).json(error);
  }
}


const addFavTrack = async (req, res) => {
  try {
      const id = req.body.id;
      const trackId = req.body.trackId;

      const accessToken = req.body.accessToken;

      const addFavTrack = await axios.post(
          `https://api.deezer.com/user/${id}/tracks?track_id=${trackId}&access_token=${accessToken}`
      );
      res.status(200).json(addFavTrack.data);
  } catch (error) {
      res.status(400).json(error);
  }
}

const deletePlaylist = async (req, res) => {
  try {
      const playlistId = req.body.playlistId;
      const accessToken = req.body.accessToken;

      const deleteTrack = await axios.delete(
          `https://api.deezer.com/playlist/${playlistId}?access_token=${accessToken}`
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
      const playlistId = req.body.playlistId;
      const playlistTrackId = req.body.playlistTrackId;
      const accessToken = req.body.accessToken;
console.log(playlistId, playlistTrackId);
      const deleteTrack = await axios.delete(
          `https://api.deezer.com/playlist/${playlistId}/tracks?songs=${playlistTrackId}&access_token=${accessToken}`
      );

      res.status(200).json(deleteTrack.data);
  } catch (error) {
      res.status(400).json(error);
  }
}

const deleteOtherUsersPlaylists = async (req, res) => {
  try {
      const playlistId = req.body.playlistId;
      const accessToken = req.body.accessToken;
      const id = req.body.id;
      const deleteOtherPlaylists = await axios.delete(
          `https://api.deezer.com/user/${id}/playlists?playlist_id=${playlistId}&access_token=${accessToken}`
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