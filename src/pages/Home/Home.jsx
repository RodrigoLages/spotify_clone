import styles from "./style.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

import logo from "../../img/LogoNav.svg";
import iconSearch from "../../img/Search.svg";
import imagePerfil from "../../img/Perfil.png";

import imageLiked from "../../img/Muc curtidas.png";
import imageFavEp from "../../img/Ep Favoritos.png";
import imageAudioBook from "../../img/Audio Book.png";
import imageGoodVibe from "../../img/Good Vibes.png";
import imageTreino from "../../img/Treino em casa.png";
import imagePagode from "../../img/Hora do Pagode.png";
import imageRock from "../../img/Rock.png";
import musicCard from "../../img/Card  1.png";
import playlistDefault from "../../img/playlist_default.png";
import addBtn from "../../img/add-button.svg";

import api from "../../services/api";

const mockData = [
  {
    image: musicCard,
    title: "Lofi Sleep",
    desciption: "Lofi Sleep",
  },
  {
    image: musicCard,
    title: "Lofi Sleep",
    desciption: "Lofi Sleep",
  },
  {
    image: musicCard,
    title: "Lofi Sleep",
    desciption: "Lofi Sleep",
  },
  {
    image: musicCard,
    title: "Lofi Sleep",
    desciption: "Lofi Sleep",
  },
  {
    image: musicCard,
    title: "Lofi Sleep",
    desciption: "Lofi Sleep",
  },
  {
    image: musicCard,
    title: "Lofi Sleep",
    desciption: "Lofi Sleep",
  },
];

function App() {
  const { username, setUsername, userId, handleLogout } = useContext(Context);
  const navigate = useNavigate();

  const [playlists, setPlaylists] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getUserPlaylists();
  }, []);

  const getUserPlaylists = () => {
    api
      .get(`/playlist/user/${userId}`)
      .then((response) => {
        setPlaylists(response.data);
      })
      .catch((err) => {
        console.log(err);
        setPlaylists(mockData);
      });
  };

  const handleChoosePlaylist = (id) => {
    navigate(`/playlist/${id}`);
  };

  const handleAdd = () => {
    const body = {
      title: "New Playlist",
      UserId: userId,
    };

    api
      .post(`/playlist/`, body)
      .then((response) => {
        setPlaylists([...playlists, response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    const body = { username };

    api.patch(`/user/${userId}`, body).catch((err) => console.log(err));
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.NavBar}>
          <div className={styles.NavLeft}>
            <img className={styles.Logo} src={logo} alt="" />
            <h4>{"Hello,\u00a0"}</h4>
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <h4 onClick={() => setIsEditing(true)}>{username}</h4>
            )}
          </div>
          <button className={styles.ButtonSearch}>
            <img src={iconSearch} alt="" />
          </button>
        </div>
        <div className={styles.Main}>
          <div className={styles.BoxLeft}>
            <img className={styles.PerfilImage} src={imagePerfil} alt="" />
            <p className={styles.Logout} onClick={handleLogout}>
              Logout
            </p>
          </div>
          <div className={styles.BoxRight}>
            <p className={styles.Title}>Good afternoon</p>
            <div className={styles.Line}>
              <img src={imageLiked} alt="" />
              <img src={imageFavEp} alt="" />
              <img src={imageAudioBook} alt="" />
              <img src={imageGoodVibe} alt="" />
              <img src={imageTreino} alt="" />
              <img src={imagePagode} alt="" />
              <img src={imageRock} alt="" />
            </div>
            <div className={styles.LineText}>
              <p className={styles.Title}>Your Playlists</p>
              <button className={styles.ShowButton}>Show all</button>
            </div>
            <div className={styles.Line}>
              {playlists.map((playlist, i) => (
                <div
                  key={i}
                  className={styles.PlaylistCard}
                  onClick={() => handleChoosePlaylist(playlist.id)}
                >
                  <img
                    className={styles.PlaylistImg}
                    src={
                      playlist.image
                        ? `${process.env.REACT_APP_API_HOST}/${playlist.image}`
                        : playlistDefault
                    }
                    alt=""
                  />
                  <p className={styles.PlaylistTitle}>{playlist.title}</p>
                </div>
              ))}
              <div className={styles.AddBtnDiv}>
                <img
                  className={styles.AddBtn}
                  src={addBtn}
                  alt=""
                  onClick={handleAdd}
                />
              </div>
            </div>
            <div className={styles.LineText}>
              <p className={styles.Title}>Sweet Dreams</p>
              <button className={styles.ShowButton}>Show all</button>
            </div>
            <div className={styles.Line}>
              <img src={musicCard} alt="" />
              <img src={musicCard} alt="" />
              <img src={musicCard} alt="" />
              <img src={musicCard} alt="" />
              <img src={musicCard} alt="" />
              <img src={musicCard} alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
