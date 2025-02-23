import * as PlaylistAPI from "../util/playlist_util"

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_NEW_PLAYLIST = 'RECEIVE_NEW_PLAYLIST'
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const CREATE_PLAYLIST_ITEM = 'CREATE_PLAYLIST_ITEM';
export const DELETE_PLAYLIST_ITEM = 'DELETE_PLAYLIST_ITEM';
export const RECEIVE_PLAYLIST_ITEM_RESPONSE = "RECEIVE_PLAYLIST_ITEM_RESPONSE"
export const CLEAR_PLAYLIST_ITEM_RESPONSE = "CLEAR_PLAYLIST_ITEM_RESPONSE"


const receiveAllPlaylists = (playlists) => ({
    type: RECEIVE_ALL_PLAYLISTS, 
    playlists
})

const receivePlaylist = ({playlist, tracks}) => ({
    type: RECEIVE_PLAYLIST, 
    playlist, 
    tracks
})

const receiveNewPlaylist = () => ({
    type: RECEIVE_NEW_PLAYLIST
})

const removePlaylist = (playlistId) => ({
    type: REMOVE_PLAYLIST,
    playlistId
})

const removePlaylistItem = (payload)=> ({
    type: DELETE_PLAYLIST_ITEM, 
    tracks: payload.tracks
})

export const receivePlaylistItemResponse = (res) => ({
    type: RECEIVE_PLAYLIST_ITEM_RESPONSE, 
    response: res
})

export const clearPlaylistItemResponse = () => ({
    type: CLEAR_PLAYLIST_ITEM_RESPONSE
})


export const fetchAllPlaylists = () => dispatch => {
    return PlaylistAPI.fetchAllPlaylists()
    .then(playlists => dispatch(receiveAllPlaylists(playlists)))
}

export const fetchPlaylist = (playlistId) => dispatch => {
    return PlaylistAPI.fetchPlaylist(playlistId)
    .then(playlist => dispatch(receivePlaylist(playlist)))
}

export const createPlaylist = (playlist) => dispatch => {
    return PlaylistAPI.createPlaylist(playlist)
    .then(() => dispatch(receiveNewPlaylist()))
}

export const updatePlaylist = (playlist) => dispatch => {
    return PlaylistAPI.updatePlaylist(playlist)
    .then(playlist => dispatch(receivePlaylist(playlist)))
}

export const deletePlaylist = (playlistId) => dispatch => {
    return PlaylistAPI.deletePlaylist(playlistId)
    .then(() => dispatch(removePlaylist(playlistId)))
}

export const createPlaylistItem = (playlistItem) => dispatch => {
    return PlaylistAPI.createPlaylistItem(playlistItem).then(res => dispatch(receivePlaylistItemResponse(res)), errorRes => console.log(("got to error handler", errorRes)))
}

export const deletePlaylistItem = (playlistItemId) => dispatch => {
    return PlaylistAPI.deletePlaylistItem(playlistItemId)
    .then(payload => dispatch(removePlaylistItem(payload)))
}

