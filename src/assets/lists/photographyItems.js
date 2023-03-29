const bridal1 = "/src/images/category-images/photo/items/bridal/1-thumb.jpg";
const bridal2 = "/src/images/category-images/photo/items/bridal/2.jpg";
const bridal3 = "/src/images/category-images/photo/items/bridal/3.jpg";
const bridal4 = "/src/images/category-images/photo/items/bridal/4.jpg";
const bridal5 = "/src/images/category-images/photo/items/bridal/5.jpg";

const listTitle = "Capturing Forever!";
const listSubtitle = "Elegantly Documenting the Beauty of Your Wedding Day.";
const desc =
  "Capture life's precious moments with our photography services!";
export default [
  {
    title: "Bridal Photography",
    link: "photography/bridal",
    thumbImgSrc: bridal1,
    desc: desc,
    border: true,
    imageList: [bridal2, bridal3, bridal4, bridal5],
    listTitle: listTitle,
    listSubtitle: listSubtitle,
  },
//   {
//     title: "Traditional Photography",
//     link: "photography/traditional",
//     thumbImgSrc: bridal2,
//     desc: desc,
//     border: false,
//     listTitle: listTitle,
//     listSubtitle: listSubtitle,
//   },
  //   {
  //     title: "Birthday",
  //     link: "photography/full",
  //     thumbImgSrc: full,
  //     desc: desc,
  //     border: true,
  //   },
];
