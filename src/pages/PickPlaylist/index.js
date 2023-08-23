import React, { useEffect, useState } from 'react'
import PickShow from '../PickShow'

const PickPlaylist = () => {
    const [playlists, setPlaylists] = useState([]);

    async function fetchUserPlaylists(token) {
        const result = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists?limit=10`, {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });
      
        return await result.json();
      }

    const getUserId = () => {
        const userProfile = JSON.parse(sessionStorage.getItem('profile'));
        return userProfile.id;
    }    
    
    const userId = getUserId();
    
    useEffect(() => {
        const playlistPromise = fetchUserPlaylists(sessionStorage.getItem('accessToken'));            
        playlistPromise.then(result => {
            setPlaylists(result.items);
        });
    }, [])
        
    console.log("waiting", playlists);
    console.log(sessionStorage);



    return (
        <div className='pp-page'>
            <a href="/showpick">Back</a>
            User's playlists
            <ul>
                {playlists
                    .filter(playlist => playlist.owner.id === userId)
                    .map(playlist => (                    
                        <li key={playlist.id}>
                            <p>Name: {playlist.name}</p>
                            <p>Owner: {playlist.owner.id}</p>
                        </li>
                ))}
                
            </ul>
        </div>
    )
}



export default PickPlaylist 