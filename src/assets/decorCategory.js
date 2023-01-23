import birthday from "../images/category-images/decor/birthday/birthday.jpg";
import birthdayHero from "../images/category-images/decor/birthday/birthday-hero.jpg";

import wedding from "../images/category-images/decor/wedding/wedding.jpg";
import weddingHero from "../images/category-images/decor/wedding/wedding-hero.jpg";

import anniversary from "../images/category-images/decor/anniversary/anniversary.jpg";
import anniversaryHero from "../images/category-images/decor/anniversary/anniversary-hero.jpg";

import puja from "../images/category-images/decor/puja/puja.jpg";
import pujaHero from "../images/category-images/decor/puja/puja-hero.jpg";

import proposal from "../images/category-images/decor/proposal/proposal.jpg";
import proposalHero from "../images/category-images/decor/proposal/proposal-hero.jpg";

import surprise from "../images/category-images/decor/surprise/surprise.jpg";
import surpriseHero from "../images/category-images/decor/surprise/surprise-hero.jpg";

import birthDayItems from "./birthDayItems";

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
    built: false,
    thumbImgSrc: wedding,
    heroImgSrc: weddingHero,
    desc: "Making your dream wedding a reality. Professional decor planning and design services.",
  },
  {
    category: "Anniversary",
    link: "decor/anniversary",
    built: false,
    thumbImgSrc: anniversary,
    heroImgSrc: anniversaryHero,
    desc: "Creating a romantic ambiance for your anniversary. Professional decor planning and design services.",
  },
  {
    category: "Puja",
    link: "decor/puja",
    built: false,
    thumbImgSrc: puja,
    heroImgSrc: pujaHero,
    desc: "Enhancing the spiritual ambiance of your puja. Professional decor planning and design services.",
  },
  {
    category: "Proposal",
    link: "decor/proposal",
    built: false,
    thumbImgSrc: proposal,
    heroImgSrc: proposalHero,
    desc: "Creating a magical ambiance for your proposal. Professional event decor planning and design services.",
  },
  {
    category: "Surprise",
    link: "decor/surprise",
    built: false,
    thumbImgSrc: surprise,
    heroImgSrc: surpriseHero,
    desc: "Making every surprise a memorable one. Professional event decor planning and design services.",
  },
];
