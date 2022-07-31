import React from 'react';
import './Login.css';
import SpotifyAPI from '../../spotifyApi';

export default function Login() {

    const attemptLogin = async () => {
        SpotifyAPI.authorize()
    }

    return (
        <div className="login-main-container">
            <h3>Spotify Profile</h3>
            <button onClick={attemptLogin}>LOGIN TO SPOTIFY</button>
        </div>
    )
}
