import React, { Component, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthOptions } from '../../api/spotify';

async function fetchProfile(token) {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });
  
    return await result.json();
  }

class Callback extends Component {  
    

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        const code = new URLSearchParams(window.location.search).get("code") || null;
        const state = new URLSearchParams(window.location.state).get("state") || null;
        const err = new URLSearchParams(window.location.search).get("error") || null;

        if (err) {
            // there has been an error, redirect back to homepage
            this.setState({
                loading: false,
                error: err ? true : false
            })
        } else {
            // successful login: request refresh and access tokens with POST request from spotify
            const authOptions = {...AuthOptions};

            const requestOptions = {
                method: 'POST',
                headers: {...authOptions.headers, 'Content-Type': 'application/x-www-form-urlencoded'},
                body: `code=${code}&grant_type=authorization_code&redirect_uri=${authOptions.form.redirect_uri}`
            };

            fetch(authOptions.url, requestOptions)
                .then(async response => {
                    // const isJson = response.headers.get('content-type')?.includes('application/json');
                    const data = await response.json();

                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error);
                    }

                    // save user's access token and refresh token
                    sessionStorage.setItem('accessToken', data.access_token);
                    sessionStorage.setItem('refreshToken', data.refresh_token);

                    const profileObject = await fetchProfile(data.access_token)
                    sessionStorage.setItem('profile', JSON.stringify(profileObject));

                    this.setState({
                        loading: false,
                        error: false
                    })
                })
                .catch(error => {
                    this.setState({
                        loading: false,
                        error: true
                    });
                    console.log("THERE HAS BEEN AN ERROR!", error)
                })
        }
    }


    render() {
        
        if (this.state.loading) {
            return (
                <h1>Please wait a moment...</h1>
            );
        } else {
            // redirect back to homepage if error else redirect to showpick after access tokens are generated
            return this.state.error ? (<Navigate push to="/"/>) : (<Navigate push to="/showpick"/>)
        }
    }
}

export default Callback;