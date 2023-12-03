import React from 'react';

const SongDetails = ({ song }) => {
    return (
        <div>
            <h2>{song.title}</h2>
            <p>Difficulty: {song.difficulty}</p>
            <p>Tuning: {song.tuning}</p>
            <p>Key: {song.key}</p>
            <p>Capo: {song.capo}</p>
            <p>Author: {song.author}</p>
            <p>Lyrics: {song.lyrics}</p>
        </div>
    );
};

export default SongDetails;