"use client";
import "./photo.css";
import one from "../../images/photo/1.JPG";
import two from "../../images/photo/2.jpeg";
import three from "../../images/photo/3.JPG";
import four from "../../images/photo/4.JPG";
import five from "../../images/photo/5.JPG";
import six from "../../images/photo/6.jpg";
import seven from "../../images/photo/7.jpg";
import eight from "../../images/photo/8.jpg";
import nine from "../../images/photo/9.jpg";
import ten from "../../images/photo/10.jpg";
import eleven from "../../images/photo/11.JPG";
import { forwardRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import { getImageSrc } from "../../utils/utils";

function Photo(props, ref) {
  const [photosQuantity, setphotosQuantity] = useState(3);

  const { ref: photoRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  function SampleArrowPrew(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          transform: "scale(2)",
          left: "50px",
          zIndex: "1",
        }}
        onClick={onClick}
      />
    );
  }

  function SampleArrowNext(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          transform: "scale(2)",
          right: "50px",
          zIndex: "1",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: photosQuantity,
    slidesToScroll: 1,
    nextArrow: <SampleArrowNext />,
    prevArrow: <SampleArrowPrew />,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1080 && window.innerWidth > 652) {
        setphotosQuantity(2);
      } else if (window.innerWidth <= 652) {
        setphotosQuantity(1);
      } else {
        setphotosQuantity(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const photos = [seven,four, one, two, six, three, five, eight, nine, ten, eleven];

  return (
    <section className="photo" id="photo" ref={ref}>
      <h2 className="photo__title">Фотографии студии</h2>
      <div className="photo__gallery" ref={photoRef}>
        {inView && (
          <Slider {...settings}>
            {photos.map((photo, index) => (
              <img
                key={index}
                src={getImageSrc(photo)}
                alt="Фотографии студии"
                className="photo__image"
              />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}

export default forwardRef(Photo);
