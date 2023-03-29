const birthday = "/src/images/category-images/decor/birthday/birthday.jpg";
const birthdayHero =
  "/src/images/category-images/decor/birthday/birthday-hero.jpg";

const wedding = "/src/images/category-images/decor/wedding/wedding.jpg";
const weddingHero =
  "/src/images/category-images/decor/wedding/wedding-hero.jpg";

const anniversary =
  "/src/images/category-images/decor/anniversary/anniversary.jpg";
const anniversaryHero =
  "/src/images/category-images/decor/anniversary/anniversary-hero.jpg";

const puja = "/src/images/category-images/decor/puja/puja.jpg";
const pujaHero = "/src/images/category-images/decor/puja/puja-hero.jpg";

const proposal = "/src/images/category-images/decor/proposal/proposal.jpg";
const proposalHero =
  "/src/images/category-images/decor/proposal/proposal-hero.jpg";

const surprise = "/src/images/category-images/decor/surprise/surprise.jpg";
const surpriseHero =
  "/src/images/category-images/decor/surprise/surprise-hero.jpg";

import anniversaryItems from "./anniversaryItems";
import birthDayItems from "./birthDayItems";
import pujaItems from "./pujaItems";
import weddingItems from "./weddingItems";
import proposalItems from "./proposalItems";
import surpriseItems from "./surpriseItems";

export default [
  {
    category: "Birthday",
    link: "decor/birthday",
    built: true,
    holder: "Card",
    list: birthDayItems,
    thumbImgSrc: birthday,
    heroImgSrc: birthdayHero,
    listTitle: "Packages",
    listSubtitle: "We offer the following packages: ",
    desc: "Bringing your birthday vision to life. Professional decor planning for a memorable celebration.",
  },
  {
    category: "Wedding",
    link: "decor/wedding",
    built: true,
    holder: "Card",
    list: weddingItems,
    thumbImgSrc: wedding,
    heroImgSrc: weddingHero,
    listTitle: "Packages",
    listSubtitle: "We offer the following packages: ",
    desc: "Making your dream wedding a reality. Professional decor planning and design services.",
  },
  {
    category: "Anniversary",
    link: "decor/anniversary",
    built: true,
    holder: "Card",
    list: anniversaryItems,
    thumbImgSrc: anniversary,
    heroImgSrc: anniversaryHero,
    listTitle: "Packages",
    listSubtitle: "We offer the following packages: ",
    desc: "Creating a romantic ambiance for your anniversary. Professional decor planning and design services.",
  },
  {
    category: "Puja",
    link: "decor/puja",
    built: true,
    holder: "Card",
    list: pujaItems,
    thumbImgSrc: puja,
    heroImgSrc: pujaHero,
    listTitle: "Packages",
    listSubtitle: "We offer the following packages: ",
    desc: "Enhancing the spiritual ambiance of your puja. Professional decor planning and design services.",
  },
  {
    category: "Proposal",
    link: "decor/proposal",
    built: true,
    holder: "Card",
    list: proposalItems,
    thumbImgSrc: proposal,
    heroImgSrc: proposalHero,
    listTitle: "Packages",
    listSubtitle: "We offer the following packages: ",
    desc: "Creating a magical ambiance for your proposal. Professional event decor planning and design services.",
  },
  {
    category: "Surprise",
    link: "decor/surprise",
    built: true,
    holder: "Card",
    list: surpriseItems,
    thumbImgSrc: surprise,
    heroImgSrc: surpriseHero,
    listTitle: "Packages",
    listSubtitle: "We offer the following packages: ",
    desc: "Making every surprise a memorable one. Professional event decor planning and design services.",
  },
];
