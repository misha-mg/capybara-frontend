import { writable } from "svelte/store";

export const products = writable([]);
export const cart = writable([
  {
    colors: [],
    availability: true,
    _id: "659702e736128c97a15acd20",
    name: "Butterfly Ribs",
    size: ["M", "L", "XL", "XXL"],
    images: [
      "https://github.com/misha-mg/capybara-images/blob/main/ribs.png?raw=true",
    ],
    price: 1199,
    category: "t_shirt",
    __v: 0,
    activeSize: "XL",
  },
]);
export const liked = writable([]);

export const productList = writable([
  // {
  //   id: 1,
  //   name: "Светер SHARK",
  //   size: ["M", "L", "XL"],
  //   price: "1990",
  //   isHeart: false,
  //   img: "/person-slider.png",
  //   cart: false,
  // },
  // {
  //   id: 2,
  //   name: "Штани BAGGY",
  //   size: ["M", "L", "XL"],
  //   price: "1230",
  //   isHeart: false,
  //   img: "/person-slider1.png",
  //   cart: false,
  // },
  // {
  //   id: 3,
  //   name: "Кофта Knitted",
  //   size: ["M", "L", "XL"],
  //   price: "1240",
  //   isHeart: false,
  //   img: "/person-slider2.png",
  //   cart: false,
  // },
  // {
  //   id: 4,
  //   name: "Светер SHARK2",
  //   size: ["M", "L", "XL"],
  //   price: "2300",
  //   isHeart: false,
  //   img: "/person-slider.png",
  //   cart: false,
  // },
  // {
  //   id: 5,
  //   name: "Кофта Knitted2",
  //   size: ["M", "L", "XL"],
  //   price: "1450",
  //   isHeart: false,
  //   img: "/person-slider2.png",
  //   cart: false,
  // },
  // {
  //   id: 6,
  //   name: "Майка Shorty",
  //   size: ["M", "L", "XL"],
  //   price: "450",
  //   isHeart: false,
  //   img: "/person-slider1.png",
  //   cart: false,
  // },
  // {
  //   id: 7,
  //   name: "Светер SHARK2",
  //   size: ["M", "L", "XL"],
  //   price: "980",
  //   isHeart: false,
  //   img: "/person-slider.png",
  //   cart: false,
  // },
  // {
  //   id: 8,
  //   name: "Светере Cola",
  //   size: ["M", "L", "XL"],
  //   price: "230",
  //   isHeart: false,
  //   img: "/person-slider2.png",
  //   cart: false,
  // },
]);
