import { writable } from "svelte/store";

export const productList = writable([
  {
    id: 1,
    name: "Светер Синій",
    price: "1990",
    isHeart: false,
    img: "",
  },
  {
    id: 2,
    name: "Кофта червона",
    price: "1230",
    isHeart: false,
    img: "",
  },
  {
    id: 3,
    name: "Футблка Рожева",
    price: "1240",
    isHeart: false,
    img: "",
  },
  {
    id: 4,
    name: "Штани Вельветові",
    price: "2300",
    isHeart: false,
    img: "",
  },
  {
    id: 5,
    name: "Кофта Зелена",
    price: "1450",
    isHeart: false,
    img: "",
  },
  {
    id: 6,
    name: "Майка Алкашка",
    price: "450",
    isHeart: false,
    img: "",
  },
  {
    id: 7,
    name: "Шорти Стильні",
    price: "980",
    isHeart: false,
    img: "",
  },
  {
    id: 8,
    name: "Шарф крутий",
    price: "230",
    isHeart: false,
    img: "",
  },
]);
