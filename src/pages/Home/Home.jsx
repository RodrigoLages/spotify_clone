import styles from "./style.module.css";
import logo from "../../img/LogoNav.svg";
import iconSetaDireita from "../../img/icon_seta_direita.svg"
import iconSetaEsquerda from "../../img/icon_seta_esquerda.svg"
import iconSearch from "../../img/Search.svg"
import imagePerfil from "../../img/Perfil.png"
import imageLiked from "../../img/Muc curtidas.png"
import musicCard from "../../img/Card  1.png"

function App() {
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
              <img src={imageLiked} alt="" />
              <img src={imageLiked} alt="" />
              <img src={imageLiked} alt="" />
              <img src={imageLiked} alt="" />
              <img src={imageLiked} alt="" />
              <img src={imageLiked} alt="" />
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
