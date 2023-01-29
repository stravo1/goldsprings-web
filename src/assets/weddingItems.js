const grandGlamour =
  "/src/images/category-images/decor/wedding/items/grand-glamour.jpeg";
const etherealDream =
  "/src/images/category-images/decor/wedding/items/ethereal-dream.jpg";
const royalRomance =
  "/src/images/category-images/decor/wedding/items/royal-romance.jpg";
const magicalMoments =
  "/src/images/category-images/decor/wedding/items/magical-moments.jpg";

const makeDesc = (name) =>
  `Looking for Birthday Decoration? Book our ${name} package with gorgeous theme and excellent decor.`;

  export default [
  {
    title: "Grand Glamour",
    link: "decor/wedding/grandGlamour",
    thumbImgSrc: grandGlamour,
    desc: makeDesc("Grand Glamour"),
  },
  {
    title: "Ethereal Dream",
    link: "decor/wedding/etherealDream",
    thumbImgSrc: etherealDream,
    desc: makeDesc("Ethereal Dream"),
  },
  {
    title: "Royal Romance",
    link: "decor/wedding/royalRomance",
    thumbImgSrc: royalRomance,
    desc: makeDesc("Royal Romance"),
  },
  {
    title: "Magical Moments",
    link: "decor/wedding/magicalMoments",
    thumbImgSrc: magicalMoments,
    desc: makeDesc("Magical Moments"),
  },
];
