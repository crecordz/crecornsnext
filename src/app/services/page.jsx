"use client";
import { forwardRef, useEffect, useRef } from "react";
import styles from "./page.module.css";
import { animateElement } from "../../utils/utils";

const Services = () => {
  const ref = useRef();
  const el = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const el4 = useRef();
  const el5 = useRef();

  useEffect(() => {
    const pin1 = animateElement(
      ref,
      el,
      "top+=20% center",
      "bottom center",
      "0",
      "10vh",
      0.4,
      "power4.out",
      0.1
    );
    const pin2 = animateElement(
      ref,
      el2,
      "top+=20% center",
      "bottom center",
      "0",
      "10vh",
      0.6,
      "power4.out",
      0.1
    );
    const pin3 = animateElement(
      ref,
      el3,
      "top+=20% center",
      "bottom center",
      "0",
      "10vh",
      0.8,
      "power4.out",
      0.1
    );
    const pin4 = animateElement(
      ref,
      el4,
      "top+=20% center",
      "bottom center",
      "0",
      "10vh",
      0.9,
      "power4.out",
      0.1
    );
    const pin5 = animateElement(
      ref,
      el5,
      "top+=20% center",
      "bottom center",
      "0",
      "10vh",
      1,
      "power4.out",
      0.1
    );
    return () => {
      pin1.kill();
      pin2.kill();
      pin3.kill();
      pin4.kill();
      pin5.kill();
    };
  }, [ref]);

  return (
    <section className={`${styles.services} `} ref={ref} id="services">
      <h2 className={styles.services__title}>Наши услуги и цены</h2>
      <ul className={`${styles.services__list} `}>
        <li className={styles.services__item} ref={el}>
          <p className={styles.services__name}>Запись</p>
          <p
            className={`${styles.services__price} ${styles.services__price_right}`}
          >
            2000р/час <br />
            <span className={styles.services__price_high}>
              (в выходные 3000р/час)
            </span>
          </p>
        </li>

        <li className={styles.services__item} ref={el3}>
          <p className={styles.services__name}>Сведение</p>
          <p
            className={`${styles.services__price} ${styles.services__price_right}`}
          >
            от 5000р <br />
            <span className={styles.services__price_high}>
              (В зависимости от сложности)
            </span>
          </p>
        </li>
        <li className={styles.services__item} ref={el4}>
          <p className={styles.services__name}>Мастеринг трека</p>
          <p className={styles.services__price}>1000р</p>
        </li>
        <li className={styles.services__item} ref={el5}>
          <p className={styles.services__name}>Аранжировка</p>
          <p
            className={`${styles.services__price} ${styles.services__price_right}`}
          >
            от 10000р <br />
            <span className={styles.services__price_high}>
              (В зависимости от сложности)
            </span>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Services;
