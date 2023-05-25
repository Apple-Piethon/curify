import React, { useState } from 'react';

const PickPlaylist = props => {   
    const [picked, setPicked] = useState(false);
    const [userId, setUserId] = useState('');

    console.log("Pick playlist", props.showUser);
    console.log(fetchPlaylist());

    const setPlaylistPick = option => {
        props.setUser('playlistPick', option);
        setPicked(true);
    }

    async function getUserId() {
        props.showUser.profile
        .then(result => {
            console.log("result here", result)
            setUserId(result.id);
        })
        .catch(err => console.log("error here", err));
    }

    // Returns a promise of fetched playlists
    async function fetchPlaylist() {
        const token = props.showUser.accessToken;
        const result = await fetch(`https://api.spotify.com/v1/me/playlists?limit=50`, {
            method: "GET", headers: { Authorization: `Bearer ${token}`}
        });
        return await result.json();
    }

    // WIP: filter out playlists that match current playlistId

    return (
        picked ? (<Navigate push to="/loading"/>) : 
        <div>
            <h1>Load user's public playlists</h1>
        </div>
    )
}

export default PickPlaylist