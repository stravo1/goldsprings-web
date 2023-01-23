import cater from "../images/category-images/catering.png";
import decor from "../images/category-images/flags.png";
import photo from "../images/category-images/camera.png";
import ritual from "../images/category-images/candle.png";
import bus from "../images/category-images/bus.png";
import card from "../images/category-images/card-3.png";
import decorCategory from "./decorCategory";

export default [
  {
    category: "Decor",
    link: "decor",
    built: true,
    holder: "CategoryItem",
    list: decorCategory,
    thumbImgSrc: decor,
    desc: "Elevate your event with our expert decor planning. Custom designs, flawless execution. Memorable events guaranteed.",
  },
  {
    category: "Catering",
    link: "catering",
    built: false,
    thumbImgSrc: cater,
    desc: "Indulge in culinary perfection with our event catering services. Delicious food, expertly presented.",
  },
  {
    category: "Photography",
    link: "photography",
    built: false,
    thumbImgSrc: photo,
    desc: "Preserve memories that last a lifetime with our professional event photography services.",
  },
  {
    category: "Rituals",
    link: "rituals",
    built: false,
    thumbImgSrc: ritual,
    desc: "Honoring traditions, creating memories. We specialize in bespoke ritual planning.",
  },
  {
    category: "Bus",
    link: "bus",
    built: false,
    thumbImgSrc: bus,
    desc: "Travel in style with us. Safe, reliable bus booking for all your transportation needs.",
  },
  {
    category: "Card Printing",
    link: "card",
    built: false,
    thumbImgSrc: card,
    desc: "Impress with every invitation. We offers professional card printing services for all your special moments.",
  },
];
