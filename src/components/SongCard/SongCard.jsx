import React from "react";
import styles from "./style.module.css";

const SongCard = ({ position, title, artist, album, duration }) => {
  return (
    <div className={styles.songCard}>
      <div className={styles.songData}>
        <div className={styles.songPosition}>
          <p>{position + 1}.</p>
        </div>
        <div className={styles.songInfo}>
          <div className={styles.title}>{title}</div>
          <div
            className={styles.songDetails}
          >{`${artist}\u00a0 ● \u00a0${album}`}</div>
        </div>
      </div>
      <p className={styles.duration}>{duration}</p>
    </div>
  );
};

export default SongCard;
