import React from "react";
import styles from "./style.module.css";

const AudioPlayer = ({ track }) => {
  return (
    <div className={styles.AudioPlayer}>
      <div>{track.title}</div>
      <audio controls autoPlay src={track.src}></audio>
    </div>
  );
};

export default AudioPlayer;
