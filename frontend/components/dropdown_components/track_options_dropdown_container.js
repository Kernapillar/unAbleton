import { connect } from "react-redux";
import TrackDropdown from "./track_options_dropdown";
import { fetchAllPlaylists, 
    fetchPlaylist,
    createPlaylistItem, 
    deletePlaylistItem 
} from "../../actions/playlist_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    // check to see if trackType is playlist
    let playlists;
    let currentPlaylistOwner = null;
    if (ownProps.location.pathname.includes("playlist")) {
        playlists = Object.values(state.entities.playlists).filter(playlist => playlist.id != ownProps.match.params.playlistId) 
        currentPlaylistOwner = state.entities.playlists[ownProps.match.params.playlistId].user_id
    } else {
       playlists =  Object.values(state.entities.playlists)
    }
    return ({
        playlists: playlists,
        currentUser: state.session.id,
        currentPlaylistOwner

    })
}

const mDTP = (dispatch, props) => {
    return ({
        fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
        fetchPlaylist: () => dispatch(fetchPlaylist(props.match.params.playlistId)),
        createPlaylistItem: playlistItem => dispatch(createPlaylistItem(playlistItem)),
        deletePlaylistItem: playlistItemId => dispatch(deletePlaylistItem(playlistItemId))
    })
}


export default withRouter(connect(mSTP, mDTP)(TrackDropdown));


