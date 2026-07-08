"use client";
import "./photo.css";
const one = "/photo/1.JPG";
const two = "/photo/2.jpeg";
const three = "/photo/3.jpg";
const four = "/photo/4.jpg";
const five = "/photo/5.JPG";
const six = "/photo/6.jpg";
const seven = "/photo/7.jpg";
const eight = "/photo/8.JPG";
const nine = "/photo/9.jpg";
const ten = "/photo/10.jpg";
const eleven = "/photo/11.JPG";
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
