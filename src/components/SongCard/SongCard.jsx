import React from "react";
import styles from "./style.module.css";

const SongCard = ({ position, track, setSelectedTrack }) => {
  return (
    <div className={styles.songCard} onClick={() => setSelectedTrack(track)}>
      <div className={styles.songData}>
        <div className={styles.songPosition}>
          <p>{position + 1}.</p>
        </div>
        <div className={styles.songInfo}>
          <div className={styles.title}>{track.title}</div>
          <div
            className={styles.songDetails}
          >{`${track.artist}\u00a0 ● \u00a0${track.album}`}</div>
        </div>
      </div>
      <p className={styles.duration}>{track.duration}</p>
    </div>
  );
};

export default SongCard;
