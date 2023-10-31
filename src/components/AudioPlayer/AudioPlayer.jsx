import React from "react";
import styles from "./style.module.css";

const AudioPlayer = ({ track }) => {
  return (
    <div className={styles.AudioPlayer}>
      <div>{track.title}</div>
      <audio
        controls
        autoPlay
        src={`${process.env.REACT_APP_API_HOST}/${track.src}`}
      ></audio>
    </div>
  );
};

export default AudioPlayer;
