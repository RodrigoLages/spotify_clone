import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

import SongCard from "../../components/SongCard/SongCard";
import logo from "../../img/logo.svg";
import playlist from "../../img/playlist.png";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

const songs = [
  {
    title: "Lightning By The Sea",
    artist: "Beshken",
    album: "Single ",
    duration: "4:04",
    src: "/Lightning_By_The_Sea.mp3",
  },
  {
    title: "Dreamy Nights",
    artist: "Moonlit Melodies",
    album: "Nocturnal Vibes",
    duration: "3:58",
    src: "/The_Roman_Call.mp3",
  },
  {
    title: "Soothing Serenade",
    artist: "Zen Harmony",
    album: "Tranquil Moments",
    duration: "4:30",
    src: "/Lightning_By_The_Sea.mp3",
  },
  {
    title: "Mystic Moonlight",
    artist: "Starry Skies",
    album: "Midnight Whispers",
    duration: "5:12",
    src: "/The_Roman_Call.mp3",
  },
  {
    title: "Rainy Day Reverie",
    artist: "Aqua Ambience",
    album: "Ripples in Rain",
    duration: "3:45",
    src: "/Lightning_By_The_Sea.mp3",
  },
  {
    title: "Chillwave Paradise",
    artist: "Sunset Soundscape",
    album: "Relaxation Odyssey",
    duration: "4:20",
    src: "/The_Roman_Call.mp3",
  },
  {
    title: "Cosmic Chillout",
    artist: "Nebula Dreams",
    album: "Galactic Harmony",
    duration: "4:48",
    src: "/Lightning_By_The_Sea.mp3",
  },
  {
    title: "Tranquil Twilight",
    artist: "Dusk Delights",
    album: "Evening Whispers",
    duration: "3:37",
    src: "/Lightning_By_The_Sea.mp3",
  },
  {
    title: "Aurora Borealis",
    artist: "Northern Lights Ensemble",
    album: "Polar Serenity",
    duration: "5:05",
    src: "/The_Roman_Call.mp3",
  },
  {
    title: "Lakeside Lullaby",
    artist: "Rippling Waters",
    album: "Calm by the Lake",
    duration: "3:59",
    src: "/Lightning_By_The_Sea.mp3",
  },
  {
    title: "Enchanted Forest",
    artist: "Woodland Serenity",
    album: "Nature's Embrace",
    duration: "4:15",
    src: "/The_Roman_Call.mp3",
  },
  {
    title: "Starry Dreamscape",
    artist: "Celestial Harmony",
    album: "Nighttime Wonders",
    duration: "4:25",
    src: "/Lightning_By_The_Sea.mp3",
  },
];

function App() {
  //const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState(songs[0]);

  return (
    <div className={styles.App}>
      <div className={styles.Header}>
        <img className={styles.HeaderLogo} src={logo} alt="" />
        <div className={styles.HeaderName}>HarmonyHue</div>
      </div>
      <div className={styles.Main}>
        <div className={styles.Card}>
          <img src={playlist} alt="" />
          <h3>Lofi Sleep/Rain</h3>
          <AudioPlayer track={selectedTrack} />
        </div>
        <div className={styles.List}>
          {songs.map((track, i) => (
            <SongCard
              key={i}
              position={i}
              track={track}
              setSelectedTrack={setSelectedTrack}
            />
          ))}
        </div>
      </div>
      {/* <AudioPlayer track={selectedTrack} /> */}
    </div>
  );
}

export default App;
