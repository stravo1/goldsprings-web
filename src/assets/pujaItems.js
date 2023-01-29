const auspiciousDecor =
  "/src/images/category-images/decor/puja/items/auspicious-decor.jpg";
const eternalGrace =
  "/src/images/category-images/decor/puja/items/eternal-grace.jpg";

const sacredSpace =
  "/src/images/category-images/decor/puja/items/sacred-space.jpg";

const makeDesc = (name) =>
  `Looking for Puja Decoration? Book our ${name} package with gorgeous theme and excellent decor.`;

export default [
  {
    title: "Auspicious Decor",
    link: "decor/puja/auspiciousDecor",
    thumbImgSrc: auspiciousDecor,
    desc: makeDesc("Auspicious Decor"),
  },
  {
    title: "Eternal Grace",
    link: "decor/puja/eternalGrace",
    thumbImgSrc: eternalGrace,
    desc: makeDesc("Eternal Grace"),
  },
  {
    title: "Sacred Space",
    link: "decor/puja/sacredSpace",
    thumbImgSrc: sacredSpace,
    desc: makeDesc("Sacred Space"),
  },
];
