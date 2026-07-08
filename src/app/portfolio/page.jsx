"use client";
import Script from "next/script";
import styles from "./page.module.css";
import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateElement } from "../../utils/utils";

gsap.registerPlugin(ScrollTrigger);

const VK_PLAYLIST = {
  elementId: "vk_playlist_-25681218_76349455",
  ownerId: -25681218,
  playlistId: 76349455,
  hash: "e7ebed9391c01f791f",
};

function Portfolio() {
  const ref = useRef();
  const paragraph1 = useRef();
  const paragraph2 = useRef();
  const paragraph3 = useRef();
  const paragraph4 = useRef();
  const paragraph5 = useRef();

  const initVkPlaylist = useCallback(() => {
    if (!window.VK?.Widgets?.Playlist) return;

    window.VK.Widgets.Playlist(
      VK_PLAYLIST.elementId,
      VK_PLAYLIST.ownerId,
      VK_PLAYLIST.playlistId,
      VK_PLAYLIST.hash,
      { width: 320 }
    );
  }, []);

  useEffect(() => {
    window.vkAsyncInit = initVkPlaylist;
    initVkPlaylist();
  }, [initVkPlaylist]);

  useEffect(() => {
    const pin2 = animateElement(
      ref,
      paragraph1,
      "top center-=20%",
      "bottom center",
      "5vw",
      "0",
      0.2,
      "none,",
      0.5
    );
    const pin3 = animateElement(
      ref,
      paragraph2,
      "top center-=20%",
      "bottom center",
      "5vw",
      "0",
      0.4,
      "none,",
      0.5
    );
    const pin4 = animateElement(
      ref,
      paragraph3,
      "top center-=20%",
      "bottom center",
      "5vw",
      "0",
      0.6,
      "none,",
      0.5
    );
    const pin5 = animateElement(
      ref,
      paragraph4,
      "top center-=20%",
      "bottom center",
      "5vw",
      "0",
      0.8,
      "none,",
      0.5
    );
    const pin6 = animateElement(
      ref,
      paragraph5,
      "top center-=20%",
      "bottom center",
      "5vw",
      "0",
      1,
      "none,",
      0.5
    );
    return () => {
      pin2.kill();
      pin3.kill();
      pin4.kill();
      pin5.kill();
      pin6.kill();
    };
  }, []);

  return (
    <section className={styles.portfolio} ref={ref}>
      <Script
        src="https://vk.com/js/api/openapi.js?168"
        strategy="afterInteractive"
        onLoad={initVkPlaylist}
      />
      <h2 className={styles.portfolio_title}>Некоторые примеры наших работ</h2>
      <div className={styles.portfolio__wrapper}>
        <div className={styles.portfolio__audio}>
          <div id={VK_PLAYLIST.elementId} />
        </div>
        <ul className={styles.portfolio__paragraph}>
          <li className={styles.portfolio__item} ref={paragraph1}>
            Мы работаем с широким спектром музыкальных жанров
          </li>
          <li className={styles.portfolio__item} ref={paragraph2}>
            Создаём аудиорекламу, аудиогиды, подкасты и тд. Например нами был
            создан{" "}
            <a
              href="https://russia.ru/participants/tverskaia-oblast"
              className={styles.portfolio__link}
              target="_blank"
              rel="noreferrer"
            >
              аудиогид
            </a>{" "}
            для выставки "Россия" на ВДНХ
          </li>
          <li className={styles.portfolio__item} ref={paragraph3}>
            Прописываем фонограммы для музыкальных спектаклей ДДиМ, ТЮЗа, Драм.
            театра и др{" "}
          </li>
          <li className={styles.portfolio__item} ref={paragraph4}>
            Записываем подарочные песни на свадьбу, выпускные, дни рождения и тд{" "}
          </li>
          <li className={styles.portfolio__item} ref={paragraph5}>
            Записываем большие коллективы, например ансамбль ТвСВУ "Молодая
            гвардия"
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
