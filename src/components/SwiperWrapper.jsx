import { toChildArray } from "preact";
import { useEffect } from "preact/hooks";

// core version + navigation, pagination modules:
import Swiper, { Navigation, EffectFade } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function SwiperWrapper(props) {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      modules: [Navigation, EffectFade],
      loop: false,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      speed: 500,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });
    console.log(props.images);
  }, []);

  return <>{props.children}</>;
}

export default SwiperWrapper;
