import { useEffect } from "react";
import { animate } from "framer-motion";

export const useScrollingCarousel = ({
  width,
  xTranslation,
  duration,
  mustFinish,
  setMustFinish,
  rerender,
  setRerender,
}) => {
  useEffect(() => {
    if (!width) return;

    const remInPx = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const remOffset = 0.5 * remInPx;
    const finalPosition = -width / 2 - remOffset;

    let controls;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender((prev) => !prev);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration,
        repeat: Infinity,
        repeatType: "loop",
      });
    }

    return () => controls?.stop();
  }, [width, xTranslation, duration, mustFinish, rerender]);
};
