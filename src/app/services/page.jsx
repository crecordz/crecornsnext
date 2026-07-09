"use client";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import { animateElementsStagger } from "../../utils/utils";

const Services = () => {
  const el = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const el4 = useRef();
  const el5 = useRef();
  const el6 = useRef();

  useEffect(() => {
    const tween = animateElementsStagger(
      [el, el2, el3, el4, el5, el6],
      40,        // на сколько px вылетают снизу
      0.6,       // длительность каждого
      0.15,      // задержка между элементами
      "power4.out"
    );

    return () => tween.kill();
  }, []);

  return (
    <section className={`${styles.services} `} id="services">
      <h2 className={styles.services__title}>Наши услуги и цены</h2>
      <ul className={`${styles.services__list} `}>
        <li className={styles.services__item} style={{ opacity: 0 }} ref={el}>
          <p className={styles.services__name}>Запись</p>
          <p className={`${styles.services__price} ${styles.services__price_right}`}>
            2000р/час <br />
            <span className={styles.services__price_high}>
              (в выходные 3000р/час)
            </span>
          </p>
        </li>

        <li className={styles.services__item} style={{ opacity: 0 }} ref={el3}>
          <p className={styles.services__name}>Сведение</p>
          <p className={`${styles.services__price} ${styles.services__price_right}`}>
            от 5000р <br />
            <span className={styles.services__price_high}>
              (В зависимости от сложности)
            </span>
          </p>
        </li>
        <li className={styles.services__item} style={{ opacity: 0 }} ref={el4}>
          <p className={styles.services__name}>Мастеринг трека</p>
          <p className={styles.services__price}>1000р</p>
        </li>
        <li className={styles.services__item} style={{ opacity: 0 }} ref={el5}>
          <p className={styles.services__name}>Аранжировка</p>
          <p className={`${styles.services__price} ${styles.services__price_right}`}>
            от 10000р <br />
            <span className={styles.services__price_high}>
              (В зависимости от сложности)
            </span>
          </p>
        </li>
        <li className={styles.services__item} style={{ opacity: 0 }} ref={el6}>
          <p className={styles.services__name}>Дистрибьюция трека</p>
          <p className={styles.services__price}>1000р</p>
        </li>
      </ul>
    </section>
  );
};

export default Services;