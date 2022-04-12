import { useState } from 'react';
import LyricBox from './LyricBox';


const Lyric = () => {

    const [artistName, setArtistName] = useState("");
    const [songName, setSongName] = useState("");
    const [lyric, setLyric] = useState(null);

    const handleClick = () => {
        fetch(`https://api.lyrics.ovh/v1/${artistName}/${songName}`)
        .then(response => response.json())
        .then(data => setLyric(data.lyrics))
        .catch(error => console.log(error));
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleClick();
        }
    }

    const lyricData = lyric ? <LyricBox content={lyric} /> : null;

    return (
        <div id="lyric">
            <div>
                <h1 id="banner">Lyric Hunter</h1>
            </div>
            <div id="search">
                <input type="text" placeholder="Enter Artist name" value={artistName} onChange={(e) => setArtistName(e.target.value)} onKeyDown={handleEnter} />
                <input type="text" placeholder="Enter song name" value={songName} onChange={(e) => setSongName(e.target.value)} onKeyDown={handleEnter} />
                <button onClick={handleClick}>Search</button>
            </div>
            {lyricData}
        </div>
    );
}



export default Lyric;
