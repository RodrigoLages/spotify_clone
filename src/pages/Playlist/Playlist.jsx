import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./style.module.css";

import iconSearch from "../../img/Search.svg";
import SongCard from "../../components/SongCard/SongCard";
import logo from "../../img/logo.svg";
import playlistDefault from "../../img/playlist.png";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

import api from "../../services/api";

const mockSongs = [
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
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState({});
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState({});
  const [allTracks, setAllTracks] = useState([]);

  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

  const playlistId = useParams().id;

  useEffect(() => {
    getPlaylistTracks();
    getAllTracks();
  }, []);

  const getPlaylistTracks = () => {
    api
      .get(`/playlist/${playlistId}`)
      .then((response) => {
        setPlaylist({
          id: response.data.id,
          title: response.data.title,
          image: response.data.image,
        });
        setPlaylistTracks(response.data.Tracks);
        if (response.data.Tracks.length > 0) {
          setSelectedTrack(response.data.Tracks[0]);
        }
      })
      .catch((err) => {
        console.log(err);
        setPlaylist({ id: 0, title: "LoFi Sleep/Rain" });
        setPlaylistTracks(mockSongs);
      });
  };

  const getAllTracks = () => {
    api
      .get(`/track`)
      .then((response) => {
        setAllTracks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemoveTrack = (id) => {
    const body = { PlaylistId: playlist.id, TrackId: id };

    api
      .delete(`/playlist/track`, { data: body })
      .catch((err) => console.log(err));

    const filtered = playlistTracks.filter((t) => t.id !== id);
    setPlaylistTracks(filtered);
  };

  //Searchbar logic
  const toggleSearchBar = () => {
    setSearchBarVisible(!isSearchBarVisible);
    setSearchValue("");
  };

  const handleTrackAdd = (track) => {
    toggleSearchBar();
    const body = { PlaylistId: playlist.id, TrackId: track.id };

    api.post(`/playlist/track`, body).catch((err) => console.log(err));

    setPlaylistTracks([...playlistTracks, track]);
  };

  return (
    <div className={styles.App}>
      <div className={styles.Header}>
        <div className={styles.Nav} onClick={() => navigate("/home")}>
          <img className={styles.HeaderLogo} src={logo} alt="" />
          <div className={styles.HeaderName}>HarmonyHue</div>
        </div>
        <div className={styles.SearchSection}>
          {isSearchBarVisible ? (
            <div className={styles.SearchContainer}>
              <input
                className={styles.SearchBar}
                type="text"
                placeholder="Search for new songs"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue ? (
                <ul className={styles.SuggestionBox}>
                  {allTracks
                    .filter((t) =>
                      t.title.toLowerCase().includes(searchValue.toLowerCase())
                    )
                    .map((t, index) => (
                      <li
                        className={styles.SearchSuggestions}
                        key={index}
                        onClick={() => handleTrackAdd(t)}
                      >
                        {t.title}
                      </li>
                    ))}
                </ul>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div style={{ cursor: "pointer" }} onClick={toggleSearchBar}>
              <div>Add Track</div>
            </div>
          )}
          <button className={styles.ButtonSearch} onClick={toggleSearchBar}>
            <img src={iconSearch} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.Main}>
        <div className={styles.Card}>
          <img
            className={styles.PlaylistImg}
            src={
              playlist.image
                ? `${process.env.REACT_APP_API_HOST}/${playlist.image}`
                : playlistDefault
            }
            alt=""
          />
          <h3>{playlist.title}</h3>
          <AudioPlayer track={selectedTrack} />
        </div>
        <div className={styles.List}>
          {playlistTracks.map((track, i) => (
            <SongCard
              key={i}
              position={i}
              track={track}
              setSelectedTrack={setSelectedTrack}
              removeTrack={handleRemoveTrack}
            />
          ))}
        </div>
      </div>
      {/* <AudioPlayer track={selectedTrack} /> */}
    </div>
  );
}

export default App;
