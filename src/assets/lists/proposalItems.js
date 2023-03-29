const loveInBloom =
  "/src/images/category-images/decor/proposal/items/proposal-1.png";
const foreverYours =
  "/src/images/category-images/decor/proposal/items/proposal-2.png";
const perfectProposal =
  "/src/images/category-images/decor/proposal/items/proposal-3.jpeg";
const blissfulBeginnings =
  "/src/images/category-images/decor/proposal/items/proposal-4.jpg";

const makeDesc = (name) =>
  `Looking for Proposal Decoration? Book our ${name} package with gorgeous theme and excellent decor.`;

export default [
  {
    title: "Love in Bloom",
    link: "decor/proposal/loveInBloom",
    thumbImgSrc: loveInBloom,
    desc: makeDesc("Love in Bloom"),
  },
  {
    title: "Forever Yours",
    link: "decor/proposal/foreverYours",
    thumbImgSrc: foreverYours,
    desc: makeDesc("Forever Yours"),
  },
  {
    title: "Perfect Proposal",
    link: "decor/proposal/perfectProposal",
    thumbImgSrc: perfectProposal,
    desc: makeDesc("Perfect Proposal"),
  },
  {
    title: "Blissful Beginnings",
    link: "decor/proposal/blissfulBeginnings",
    thumbImgSrc: blissfulBeginnings,
    desc: makeDesc("Blissful Beginnings"),
  },
];
