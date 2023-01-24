const colorfulCelebrations =
  "/src/images/category-images/decor/birthday/items/colorful-celebrations.jpeg";
const deluxeBirthday =
  "/src/images/category-images/decor/birthday/items/deluxe-birthday.jpg";
const joyfulJubilee =
  "/src/images/category-images/decor/birthday/items/joyful-jubilee.png";
const magicalMoments =
  "/src/images/category-images/decor/birthday/items/magical-moments.png";

const makeDesc = (name) =>
  `Looking for Birthday Decoration? Book our ${name} package with gorgeous theme and excellent decor.`;

  export default [
  {
    title: "Colorful Celebrations",
    link: "decor/birthday/colorfulCelebrations",
    thumbImgSrc: colorfulCelebrations,
    desc: makeDesc("Colorful Celebrations"),
  },
  {
    title: "Deluxe Birthday",
    link: "decor/birthday/deluxeBirthday",
    thumbImgSrc: deluxeBirthday,
    desc: makeDesc("Deluxe Birthday"),
  },
  {
    title: "Joyful Jubilee",
    link: "decor/birthday/joyfulJubilee",
    thumbImgSrc: joyfulJubilee,
    desc: makeDesc("Joyful Jubilee"),
  },
  {
    title: "Magical Moments",
    link: "decor/birthday/magicalMoments",
    thumbImgSrc: magicalMoments,
    desc: makeDesc("Magical Moments"),
  },
];
