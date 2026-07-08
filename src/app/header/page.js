"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={`${styles.header} ${styles.header_colored}`}>
      <div className={styles.header__container}>
        <Link href="/" onClick={closeMenu}>
          <div className={styles.header__logo}></div>
        </Link>
        <nav
          className={`${styles.header__wrapper} ${
            isMenuOpen ? styles.header__wrapper_open : ""
          }`}
        >
          <ul
            className={`${styles.header__list} ${
              isMenuOpen ? styles.header__list_open : ""
            }`}
          >
            <li className={styles.header__item}>
              <Link href="/about-us" onClick={closeMenu}>
                О нас
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link href="/services" onClick={closeMenu}>
                Услуги
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link href="/equipment" onClick={closeMenu}>
                Оборудование
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link href="/portfolio" onClick={closeMenu}>
                Наши работы
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link href="/photo" onClick={closeMenu}>
                Фотографии
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link href="/reviews" onClick={closeMenu}>
                Отзывы
              </Link>
            </li>
            <li className={styles.header__item}>
              <Link href="/contacts" onClick={closeMenu}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__wrapperMenu}>
          <div className={styles.header__contacts}>
            <a className={styles.header__phone} href="tel:+79040161294">
              +79040161294
            </a>
            <p className={styles.header__adress}>
              Тверь, ул. Александра Завидова 14
            </p>
          </div>
          <button
            type="button"
            className={`${styles.header__menu} ${
              isMenuOpen ? styles.header__menu_open : ""
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
