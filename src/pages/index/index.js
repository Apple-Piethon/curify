import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

const useStyles = theme => ({
    login: {
        display: 'grid',
        placeItems: 'center',
        height: '150vh',
        backgroundColor: '#1DB9A2',

        '& img':{
            width: '50%'
        },

        '& a':{
            padding: '20px',
            borderRadius: '99px',
            backgroundColor: '#1DB954',
            fontWeight: 600,
            color: 'black',
            textDecoration: 'none',
        },

        '& a:hover':{
            backgroundColor:'black',
            borderColor: '#1db954',
            color: '#1DB954',
        }
    },
});

class Index extends Component {
    constructor(){
        super();
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
            spotifyApi.setAccessToken(token);
        }
        this.state = {
            loggedIn: token ? true : false,
            nowPlaying: { name: 'Not Checked', albumArt:'' }
        }
        console.log(params);
    }

    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q);
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.login}>
                <a href='http://localhost:8888/login'>
                    <img src="images/spotify-icon-black.eps" alt="spotify-icon"/>
                    Connect to Spotify
                </a>
            </div>
        );
    }
}

export default withStyles(useStyles)(Index)