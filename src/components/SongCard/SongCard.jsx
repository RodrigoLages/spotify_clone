import React from "react";
import styles from "./style.module.css";
import trashIcon from "../../img/trash.svg";

const SongCard = ({ position, track, setSelectedTrack, removeTrack }) => {
  return (
    <div className={styles.songCard}>
      <div className={styles.Main} onClick={() => setSelectedTrack(track)}>
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
      <img
        className={styles.trashIcon}
        src={trashIcon}
        alt=""
        onClick={() => removeTrack(track.id)}
      />
    </div>
  );
};

export default SongCard;
