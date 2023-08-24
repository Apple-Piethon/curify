import React, { useEffect, useState } from 'react'
import PickShow from '../PickShow'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#231E20',
        color: 'white',
    },
    button: {
        
    },
    card: {
        backgroundColor: 'rgba(10, 10, 10, 0.2)',
    },
    item: {
        backgroundColor: 'rgba(116, 104, 104, 0.2)',
        color: 'white',
    }
}))

const PickPlaylist = () => {
    const classes = useStyles();
    const [playlists, setPlaylists] = useState([]);

    async function fetchUserPlaylists(token) {
        // UPDATE LIMIT
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



    return (
        <div className={classes.root}>
            <Button variant="contained" disableRipple href="/showpick">BACK</Button>
            <div>

                <div>Pick your playlist.</div>
                <div>SEE ALL</div>
                
                    <Card className={classes.card}>
                    {playlists
                        .filter(playlist => playlist.owner.id === userId)
                        .slice(0, 3)
                        .map(playlist => (   

                            <Card className={classes.item} key={playlist.id}>
                                <img
                                    alt="Playlist album art"
                                    src={playlist.images[0].url}
                                    height='100px'
                                />
                                <p>Name: {playlist.name}</p>    
                                
                                
                            </Card>                 
                    ))}
                    </Card>
                    
            </div>
        </div>
    )
}



export default PickPlaylist 