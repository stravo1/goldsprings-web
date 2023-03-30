const bridal1 = "/src/images/category-images/photo/items/bridal/1-thumb.jpg";
const bridal2 = "/src/images/category-images/photo/items/bridal/2.1.jpg";
const bridal3 = "/src/images/category-images/photo/items/bridal/3.1.jpg";
const bridal4 = "/src/images/category-images/photo/items/bridal/4.1.jpg";
const bridal5 = "/src/images/category-images/photo/items/bridal/5.2.jpg";

const trad1 = "/src/images/category-images/photo/items/trad/1.jpg";
const trad2 = "/src/images/category-images/photo/items/trad/2.jpg";
const trad3 = "/src/images/category-images/photo/items/trad/3.jpg";

const desc = "Capture life's precious moments with our photography services!";
export default [
  {
    title: "Bridal Photography",
    link: "photography/bridal",
    thumbImgSrc: bridal1,
    desc: desc,
    border: true,
    imageList: [bridal2, bridal3, bridal4, bridal5],
    listTitle: "Capturing Forever!",
    listSubtitle: "Elegantly Documenting the Beauty of Your Wedding Day.",
  },
  {
    title: "Traditional Photography",
    link: "photography/traditional",
    thumbImgSrc: trad1,
    desc: desc,
    border: true,
    imageList: [trad2, trad3],
    listTitle: "Spiritual Memories",
    listSubtitle: "Preserving your traditional moments with timeless photography.",
  },
  //   {
  //     title: "Birthday",
  //     link: "photography/full",
  //     thumbImgSrc: full,
  //     desc: desc,
  //     border: true,
  //   },
];
