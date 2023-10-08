//import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

import SongCard from "../../components/SongCard/SongCard";
import logo from "../../img/logo.svg";
import playlist from "../../img/playlist.png";

function App() {
  //const navigate = useNavigate();

  const songs = [
    {
      title: "Lofi Sleep",
      artist: "Chilled Cow",
      album: "Sleep/Rain",
      duration: "4:14",
    },
    {
      title: "Dreamy Nights",
      artist: "Moonlit Melodies",
      album: "Nocturnal Vibes",
      duration: "3:56",
    },
    {
      title: "Soothing Serenade",
      artist: "Zen Harmony",
      album: "Tranquil Moments",
      duration: "4:30",
    },
    {
      title: "Mystic Moonlight",
      artist: "Starry Skies",
      album: "Midnight Whispers",
      duration: "5:12",
    },
    {
      title: "Rainy Day Reverie",
      artist: "Aqua Ambience",
      album: "Ripples in Rain",
      duration: "3:45",
    },
    {
      title: "Chillwave Paradise",
      artist: "Sunset Soundscape",
      album: "Relaxation Odyssey",
      duration: "4:20",
    },
    {
      title: "Cosmic Chillout",
      artist: "Nebula Dreams",
      album: "Galactic Harmony",
      duration: "4:48",
    },
    {
      title: "Tranquil Twilight",
      artist: "Dusk Delights",
      album: "Evening Whispers",
      duration: "3:37",
    },
    {
      title: "Aurora Borealis",
      artist: "Northern Lights Ensemble",
      album: "Polar Serenity",
      duration: "5:05",
    },
    {
      title: "Lakeside Lullaby",
      artist: "Rippling Waters",
      album: "Calm by the Lake",
      duration: "3:59",
    },
    {
      title: "Enchanted Forest",
      artist: "Woodland Serenity",
      album: "Nature's Embrace",
      duration: "4:15",
    },
    {
      title: "Starry Dreamscape",
      artist: "Celestial Harmony",
      album: "Nighttime Wonders",
      duration: "4:25",
    },
  ];

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
        </div>
        <div className={styles.List}>
          {songs.map((track, i) => (
            <SongCard
              key={i}
              position={i}
              title={track.title}
              artist={track.artist}
              album={track.album}
              duration={track.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
