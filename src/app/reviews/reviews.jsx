"use client";
import { forwardRef } from "react";
import "./reviews.css";
import { useInView } from "react-intersection-observer";

function Reviews(props, ref) {
  const { ref: revRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="reviews" id="reviews" ref={ref}>
      <h2 className="reviews__title">Отзывы о работе нашей студии</h2>
      <div ref={revRef} className="reviews__map">
        {inView && (
          <iframe
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid #333333",
              borderRadius: "3px",
              boxSizing: "border-box",
            }}
            src="https://yandex.ru/maps-reviews-widget/21226809657?comments"
            title="reviews"
          ></iframe>
        )}
      </div>
    </section>
  );
}

export default forwardRef(Reviews);
