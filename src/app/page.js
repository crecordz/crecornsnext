"use client";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import video from "../video/video2.m4a";
import wall from "../images/wall2.png";
import { getImageSrc } from "../utils/utils";

export default function Home() {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [mobileWidth, setMobileWidth] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 314.16;
      setProgress(progress);
    };
    video.addEventListener("timeupdate", updateProgress);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setMobileWidth(true);
      } else {
        setMobileWidth(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className={styles.info}>
      <div className={styles.info__titles}>
        <h2 className={styles.info__title}>Cтудия звукозаписи в Твери</h2>

        <p className={styles.info__subtitle}>
          Запись вокала, сведение, мастеринг, аранжировка
        </p>
      </div>
      <div>
        {mobileWidth ? (
          <img
            src={getImageSrc(wall)}
            className={styles.info__image}
            alt="background"
          />
        ) : (
          <video
            className={styles.info__video}
            autoPlay
            loop
            muted
            playsInline
            ref={videoRef}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {!mobileWidth ? (
        <button className={styles.pauseButton} onClick={togglePlayPause}>
          <svg className={styles.pauseIcon} viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" className={styles.progressBg} />
            <circle
              cx="60"
              cy="60"
              r="50"
              className={styles.progressBar}
              strokeDasharray={`${progress} 314`}
              strokeDashoffset="0"
            />
            {isPlaying ? (
              <>
                <rect
                  x="48"
                  y="42"
                  width="4"
                  height="35"
                  className={styles.pauseIconBar}
                />
                <rect
                  x="68"
                  y="42"
                  width="4"
                  height="35"
                  className={styles.pauseIconBar}
                />
              </>
            ) : (
              <polygon points="50,45 75,60 50,75" className={styles.playIcon} />
            )}
          </svg>
        </button>
      ) : null}
    </section>
  );
}
