import gsap from "gsap";

export function getImageSrc(image) {
  return typeof image === "string" ? image : image.src;
}

export function animateElementsStagger(refs, y, duration, stagger, ease) {
  return gsap.fromTo(
    refs.map((ref) => ref.current),
    { y: y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: duration,
      ease: ease,
      stagger: stagger,
    }
  );
}