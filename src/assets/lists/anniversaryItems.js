const timelessElegance =
  "/src/images/category-images/decor/anniversary/items/timeless-elegance.png";
const romanticRetreat =
  "/src/images/category-images/decor/anniversary/items/romantic-retreat.jpg";
const goldenMoments =
  "/src/images/category-images/decor/anniversary/items/golden-moments.jpg";
const floralExtravaganza = "/src/images/category-images/decor/anniversary/items/floral.jpg";
const floralDream = "/src/images/category-images/decor/anniversary/items/floral-dream.jpeg";

const makeDesc = (name) =>
  `Looking for Anniversary Decoration? Book our ${name} package with gorgeous theme and excellent decor.`;

export default [
  {
    title: "Timeless Elegance",
    link: "decor/anniversary/elegantAffair",
    thumbImgSrc: timelessElegance,
    desc: makeDesc("Elegant Affair"),
  },
  {
    title: "Romantic Retreat",
    link: "decor/anniversary/romanticRetreat",
    thumbImgSrc: romanticRetreat,
    desc: makeDesc("Romantic Retreat"),
  },
  {
    title: "Golden Moments",
    link: "decor/anniversary/goldenMoments",
    thumbImgSrc: goldenMoments,
    desc: makeDesc("Golden Moments"),
  },
  {
    title: "Floral Extravaganza",
    link: "decor/anniversary/floralExtravaganza",
    thumbImgSrc: floralExtravaganza,
    desc: makeDesc("Floral Extravaganza"),
  },
  {
    title: "Floral Dream",
    link: "decor/anniversary/floralDream",
    thumbImgSrc: floralDream,
    desc: makeDesc("Floral Dream"),
  },
];
