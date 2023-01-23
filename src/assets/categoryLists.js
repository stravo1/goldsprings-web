import cater from "../images/category-images/cater.jpg";
import decor from "../images/category-images/decor.jpg";
import photo from "../images/category-images/photo.jpg";
import ritual from "../images/category-images/rituals.jpg";
import bus from "../images/category-images/bus.jpg";
import card from "../images/category-images/card.jpg";

import decorHero from "../images/category-images/decor/decor-hero.jpg";
import caterHero from "../images/category-images/cater/cater-hero.jpg";
import photoHero from "../images/category-images/photo/photo-hero.jpg";
import ritualHero from "../images/category-images/rituals/rituals-hero.jpg";
import busHero from "../images/category-images/bus/bus-hero.jpg";
import cardHero from "../images/category-images/card/card-hero.jpg";

import decorCategory from "./decorCategory";

export default [
  {
    category: "Decor",
    link: "decor",
    built: true,
    holder: "CategoryItem",
    list: decorCategory,
    thumbImgSrc: decor,
    heroImgSrc: decorHero,
    listTitle: "Events",
    listSubtitle: "We provide decoration for the following events: ",
    desc: "Elevate your event with our expert decor planning. Custom designs, flawless execution. Memorable events guaranteed.",
  },
  {
    category: "Catering",
    link: "catering",
    built: false,
    thumbImgSrc: cater,
    heroImgSrc: caterHero,
    desc: "Indulge in culinary perfection with our event catering services. Delicious food, expertly presented.",
  },
  {
    category: "Photography",
    link: "photography",
    built: false,
    thumbImgSrc: photo,
    heroImgSrc: photoHero,
    desc: "Preserve memories that last a lifetime with our professional event photography services.",
  },
  {
    category: "Rituals",
    link: "rituals",
    built: false,
    thumbImgSrc: ritual,
    heroImgSrc: ritualHero,
    desc: "Honoring traditions, creating memories. We specialize in bespoke ritual planning.",
  },
  {
    category: "Bus",
    link: "bus",
    built: false,
    thumbImgSrc: bus,
    heroImgSrc: busHero,
    desc: "Travel in style with us. Safe, reliable bus booking for all your transportation needs.",
  },
  {
    category: "Card Printing",
    link: "card",
    built: false,
    thumbImgSrc: card,
    heroImgSrc: cardHero,
    desc: "Impress with every invitation. We offers professional card printing services for all your special moments.",
  },
];
