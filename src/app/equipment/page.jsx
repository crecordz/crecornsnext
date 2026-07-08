"use client";
import styles from "./page.module.css";
import EquipmentItem from "../../components/Equipment-item/Equipment-item";

function Equipment() {
  return (
    <section className={styles.equipment} id="equipment">
      <h2 className={styles.equipment__title}>Оборудование</h2>
     
   
        <ul className={styles.equipment__list}>
          <EquipmentItem title={"Микрофон Neumann 87U"} />
          <EquipmentItem title={"Микрофон Elation km901 p48"} />
          <EquipmentItem title={"Микрофон Октава 319"} />
          <EquipmentItem title={"Микрофон Октава 519"} />
          <EquipmentItem
            title={"Аудиоинтерфейс Universal audio Apollo 16 mk II"}
          />
          <EquipmentItem title={"Мониторы Quested S8"} />
          <EquipmentItem title={"Мониторы dynaudio bm6a mkii"} />
          <EquipmentItem title={"Мониторы Urei 813c"} />
          <EquipmentItem title={"Станция мониторинга Presonus"} />
          <EquipmentItem title={"Оцифровщики Digilab DAC +ADC"} />
          <EquipmentItem title={"Предусилитель Digilab marvel Quad"} />
          <EquipmentItem
            title={"Предусилитель EMI Chandler limited. Passive TG Channel"}
          />
        </ul>
    
    </section>
  );
}

export default Equipment;
