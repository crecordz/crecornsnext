"use client";
import "./contacts.css";
import tg from "../../images/telegram.svg";
import wu from "../../images/whatsapp.svg";
import vk from "../../images/vk.svg";
import { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import { getImageSrc } from "../../utils/utils";

function Contacts(props, ref) {
  const { ref: contRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="contacts" id="contacts" ref={ref}>
      <h2 className="contacts__title">Контакты</h2>
      <div className="contacts__wrapper" ref={contRef}>
        {inView && (
          <div className="contacts__map-container">
            <iframe
              title="map"
              src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=35.899922%2C56.835885&mode=search&oid=21226809657&ol=biz&z=17"
              width="100%"
              height="100%"
              allowFullScreen={true}
              className="contacts__map"
            ></iframe>
          </div>
        )}
        {inView && (
          <div className="contacts__info">
            <h4 className="contacts__item">Адрес:</h4>
            <p className="contacts__paragraph">
              г.Тверь, ул.Александра Завидова, д.14. Вход в студию звукозаписи
              находится напротив Тверского Государственного Университета
              (Садовый переулок, д.35)
            </p>
            <h4 className="contacts__item">Почта:</h4>
            <p className="contacts__paragraph">crecordz@yandex.ru</p>
            <h4 className="contacts__item">Режим работы:</h4>
            <p className="contacts__paragraph">Ежедневно с 9:00 до 21:00</p>
            <h4 className="contacts__item">Соцсети:</h4>
            <ul className="contacts__list">
              <a
                className="contacts__link"
                href="https://telegram.im/@CRECODRZ"
                target="_blank"
                rel="noreferrer"
              >
                <img src={getImageSrc(tg)} alt="telegram" className="contacts__icon" />
              </a>
              <a
                className="contacts__link"
                href="https://api.whatsapp.com/send?phone=79040161294"
                target="_blank"
                rel="noreferrer"
              >
                <img src={getImageSrc(wu)} alt="whatsup" className="contacts__icon" />
              </a>
              <a
                className="contacts__link"
                href="https://vk.com/c.records"
                target="_blank"
                rel="noreferrer"
              >
                <img src={getImageSrc(vk)} alt="vk" className="contacts__icon" />
              </a>
      
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default forwardRef(Contacts);
