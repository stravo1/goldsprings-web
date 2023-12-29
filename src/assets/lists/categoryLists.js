const cater = "/src/images/category-images/cater.jpg";
const decor = "/src/images/category-images/decor.jpg";
const photo = "/src/images/category-images/photo.jpg";
const ritual = "/src/images/category-images/rituals.jpg";
const bus = "/src/images/category-images/bus.jpg";
const card = "/src/images/category-images/card.png";

const decorHero = "/src/images/category-images/decor/decor-hero.jpg";
const caterHero = "/src/images/category-images/cater/cater-hero.jpg";
const photoHero = "/src/images/category-images/photo/photo-hero.jpg";
const ritualHero = "/src/images/category-images/rituals/rituals-hero.jpg";
const busHero = "/src/images/category-images/bus/bus-hero.jpg";
const cardHero = "/src/images/category-images/card/card-hero.jpg";

import cateringMenuItems from "./cateringMenuItems";
import decorCategory from "./decorCategory";
import photographyItems from "./photographyItems";
import ritualItems from "./ritualItems";

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
    built: true,
    holder: "Card",
    list: cateringMenuItems,
    thumbImgSrc: cater,
    heroImgSrc: caterHero,
    listTitle: "Menus",
    listSubtitle: "We provide the following menus in our catering service: ",
    desc: "Indulge in culinary perfection with our event catering services. Delicious food, expertly presented.",
  },
  {
    category: "Photography",
    link: "photography",
    built: true,
    holder: "Card",
    list: photographyItems,
    thumbImgSrc: photo,
    heroImgSrc: photoHero,
    listTitle: "Click!",
    listSubtitle: "We provide photography service for the following events: ",
    desc: "Preserve memories that last a lifetime with our professional event photography services.",
  },
  {
    category: "Rituals",
    link: "rituals",
    built: true,
    holder: "Card",
    list: ritualItems,
    thumbImgSrc: ritual,
    heroImgSrc: ritualHero,
    listTitle: "Namaskar!",
    listSubtitle: "We provide pandits for the following ceremonial events: ",
    desc: "Honoring traditions, creating memories. We specialize in bespoke ritual planning.",
  },
  // {
  //   category: "Bus",
  //   link: "bus",
  //   built: true,
  //   thumbImgSrc: bus,
  //   heroImgSrc: busHero,
  //   desc: "Travel in style with us. Safe, reliable bus booking for all your transportation needs.",
  // },
  {
    category: "Card Printing",
    link: "card",
    built: false,
    thumbImgSrc: card,
    heroImgSrc: cardHero,
    desc: "Impress with every invitation. We offers professional card printing services for all your special moments.",
  },
];
