import React, {Component}  from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Icon, Button, Box } from '@material-ui/core';
import { FaSpotify } from 'react-icons/fa';


import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

const useStyles = theme => ({
    root: {
        background: '#1DB954',
        color: 'black',
        '&:hover': {
            background: '#25BB5A',
            color: 'white',
        },
    },

    // Allow button to be below the title
    button: {
        margin: theme.spacing(1),
        borderRadius: "5em",
        // color:'green',
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
        const svgIcon = (
            <Icon>
                <img alt="spotify" src="spotify-icon-black.png"/>
            </Icon>
        )
        return (
            <Box
                display="grid"
                bgcolor="#23CCB3"
                alignItems="center"
                justifyContent="center"
            >

                <Box 
                    m="auto"
                    display="grid"
                >
                    <div className="outer-circle">
                        <div className="inner-circle">
                            <div className="circle-txt">Curify.<br/>
                                <div className="circle-desc">Relax and let us plan your night.</div>
                            </div>
                        </div>
                    </div>
                    <Button 
                        href="http://localhost:8888/login"
                        variant="contained"
                        disableRipple="true"
                        startIcon={<FaSpotify/>}
                        className={classes.button}
                        classes={{root: classes.root}}
                    >
                        Connect to Spotify
                    </Button>

                </Box>
            </Box>
        );
    }
}


export default withStyles(useStyles)(Index)