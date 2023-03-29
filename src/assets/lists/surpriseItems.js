const surpriseSensation =
  "/src/images/category-images/decor/surprise/items/surprise-1.png";
const secretSoiree =
  "/src/images/category-images/decor/surprise/items/surprise-2.png";
const mysticalMoments =
  "/src/images/category-images/decor/surprise/items/surprise-3.jpg";

const makeDesc = (name) =>
  `Looking for Surprise Decoration? Book our ${name} package with gorgeous theme and excellent decor.`;

export default [
  {
    title: "Surprise Sensation",
    link: "decor/surprise/surpriseSensation",
    thumbImgSrc: surpriseSensation,
    desc: makeDesc("Surprise Sensation"),
  },
  {
    title: "Secret Soirée",
    link: "decor/surprise/secretSoiree",
    thumbImgSrc: secretSoiree,
    desc: makeDesc("Secret Soirée"),
  },
  {
    title: "Mystical Moments",
    link: "decor/surprise/mysticalMoments",
    thumbImgSrc: mysticalMoments,
    desc: makeDesc("Mystical Moments"),
  },
];
