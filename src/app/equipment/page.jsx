"use client";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import EquipmentItem from "../../components/Equipment-item/Equipment-item";
import { animateElementsStagger } from "../../utils/utils";

const items = [
  "Микрофон Neumann 87U",
  "Микрофон Elation km901 p48",
  "Микрофоны Октава 319 и 519",
  "Мониторы Quested S8",
  "Мониторы Urei 813c",
  "Станция мониторинга Presonus",
  "Оцифровщики Digilab DAC +ADC",
  "Предусилитель Digilab marvel Quad",
  "Предусилитель EMI Chandler limited. Passive TG Channel",
];

function Equipment() {
  const refs = useRef(items.map(() => ({ current: null })));

  useEffect(() => {
    const tween = animateElementsStagger(
      refs.current,
      40,
      0.6,
      0.15,
      "power4.out"
    );

    return () => tween.kill();
  }, []);

  return (
    <section className={styles.equipment} id="equipment">
      <h2 className={styles.equipment__title}>Оборудование</h2>

      <ul className={styles.equipment__list}>
        {items.map((title, i) => (
          <EquipmentItem key={title} title={title} ref={refs.current[i]} />
        ))}
      </ul>
    </section>
  );
}

export default Equipment;