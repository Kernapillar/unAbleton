import {
    RECEIVE_ALL_TRACKS,
    RECEIVE_ALBUM,
    RECEIVE_ARTIST, 
    RECEIVE_HOME_PAGE
} from '../actions/music_actions'
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';


const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            return action.tracks;
        case RECEIVE_ARTIST:
            return action.tracks;
        case RECEIVE_ALBUM:
            return action.tracks;
        case RECEIVE_HOME_PAGE:
            return {}
        case RECEIVE_PLAYLIST:
            if (action.tracks){
                return action.tracks
            }
            return state
        default:
            return state;
    }
}

export  default tracksReducer;