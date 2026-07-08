import { useEffect, useRef } from "react";
import "./Equipment-item.css";
import gsap from "gsap";

function EquipmentItem({ title }) {
  const blinkRef = useRef();
  const randomDelay = gsap.utils.random(0, 40);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      blinkRef.current,
      { left: "5px", opacity: 0 },
      {
        left: "40%",
        opacity: 0.7,
        ease: "none",
        duration: 1,
        delay: randomDelay,
      }
    )
      .to(blinkRef.current, {
        left: "80%",
        opacity: 0.5,
        ease: "none",
        duration: 1,
      })
      .to(blinkRef.current, {
        left: "100%",
        opacity: 0,
        ease: "none",
        duration: 1,
      });
    return () => {
      tl.kill();
    };
  }, [randomDelay]);
  return (
    <li className="equipment-title">
      <p className="equipment-title__title">{title}</p>
      <div className="equipment-title__line">
        <div className="blink" ref={blinkRef}></div>
      </div>
    </li>
  );
}

export default EquipmentItem;
