import styles from "./style.module.css";

import { useNavigate } from "react-router-dom";

import logo from "../../img/LogoNav.svg";
import iconSetaDireita from "../../img/icon_seta_direita.svg"
import iconSetaEsquerda from "../../img/icon_seta_esquerda.svg"
import iconSearch from "../../img/Search.svg"
import imagePerfil from "../../img/Perfil.png"

import imageLiked from "../../img/Muc curtidas.png"
import imageFavEp from "../../img/Ep Favoritos.png"
import imageAudioBook from "../../img/Audio Book.png"
import imageGoodVibe from "../../img/Good Vibes.png"
import imageTreino from "../../img/Treino em casa.png"
import imagePagode from "../../img/Hora do Pagode.png"
import imageRock from "../../img/Rock.png"

import musicCard from "../../img/Card  1.png"

const playlists = [
  {
    image: musicCard,
    title: "Lofi Sleep",
    desciption: "Lofi Sleep"
  },
  {
    image: musicCard,
    title: "Lofi Sleep",
    desciption: "Lofi Sleep"
  },
  {
    image: musicCard,
    title: "Lofi Sleep",
    desciption: "Lofi Sleep"
  },
  {
    image: musicCard,
    title: "Lofi Sleep",
    desciption: "Lofi Sleep"
  },
  {
    image: musicCard,
    title: "Lofi Sleep",
    desciption: "Lofi Sleep"
  },
  {
    image: musicCard,
    title: "Lofi Sleep",
    desciption: "Lofi Sleep"
  },
]

function App() {
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    navigate("/playlist");
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.NavBar}>
          <img className={styles.Logo} src={logo} alt="" />
          <div className={styles.Setas}>
            <button className={styles.ButtonSeta}>
              <img src={iconSetaEsquerda} alt="" />
            </button>
            <button className={styles.ButtonSeta}>
              <img src={iconSetaDireita} alt="" />
            </button>
          </div>
          <button className={styles.ButtonSearch}>
            <img src={iconSearch} alt="" />
          </button>
        </div>
        <div className={styles.Main}>
          <div className={styles.BoxLeft}>
            <img className={styles.PerfilImage} src={imagePerfil} alt="" />
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
              <p className={styles.Title}>Sweet Dreams</p>
              <button className={styles.ShowButton}>Show all</button>
            </div>
            <div className={styles.Line}>
            {playlists.map((playlist, i) => (
              <button className={styles.CardButton} onClick={handleRegister}><img src={playlist.image} alt="" /></button>
          ))}
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
