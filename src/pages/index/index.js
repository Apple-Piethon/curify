import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();


const useStyles = theme => ({
    root: {
        height: 55,
        width: 318.96,
        background: '#1DB954',
        color: 'black',
        padding: '0 30px',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
        '&:hover': {
            background: '#25BB5A',
            color: 'white',
        },
    },
    label: {
        textTransform: 'none',
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 30,
        '&:hover': {
            color: 'white',
        }
    },

    circle: {
        display: 'flex',
        width: 100,
        height: 100,
        background: 'green',
        borderRadius: 50,
    }

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
            <div style={{  
                    display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#23CCB3'
                    }}>
                <div className="container">
                    <div className="outer-circle">
                        <div className="inner-circle">
                            <div className="circle-txt">Curify.<br/>
                                <div className="circle-desc">Relax and let us plan your night.</div>
                            </div>
                            {/* <div className="circle-desc">Relax and let us plan your night.</div> */}
                        </div>
                    </div>
                    <div>
                        <Button
                            classes={{
                                root: classes.root,
                                label: classes.label,
                            }}
                            href='http://localhost:8888/login'
                            >Connect to Spotify
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(Index)