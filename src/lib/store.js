import { writable } from "svelte/store";

export const cart = writable([]);
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
