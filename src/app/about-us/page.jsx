"use client";
import { forwardRef, useEffect, useState } from "react";
import styles from "./page.module.css";

import preview from "../../images/preview.jpg";

function AboutUs() {
  const [size, setSize] = useState({ width: "853px", height: "480px" });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 918) {
        setSize({ width: "853px", height: "480px" });
      } else if (window.innerWidth <= 917 && window.innerWidth > 700) {
        setSize({ width: "640px", height: "360px" });
      } else if (window.innerWidth <= 700 && window.innerWidth > 550) {
        setSize({ width: "512px", height: "288px" });
      } else if (window.innerWidth <= 550 && window.innerWidth > 458) {
        setSize({ width: "420px", height: "236px" });
      } else if (window.innerWidth <= 458 && window.innerWidth > 413) {
        setSize({ width: "380px", height: "214px" });
      } else if (window.innerWidth <= 413 && window.innerWidth > 350) {
        setSize({ width: "320px", height: "180px" });
      } else if (window.innerWidth <= 350) {
        setSize({ width: "280px", height: "158px" });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles["about-us"]}>
      <h2 className={styles["about-us__title"]}>О нашей студии</h2>

      <div className={styles["about-us__video"]}>
        <iframe
          width={size.width}
          height={size.height}
          src="https://www.youtube.com/embed/JBhxMiIjAMo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles["about-us__iframe"]}
        />
      </div>
    </section>
  );
}

export default AboutUs;
