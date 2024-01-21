// export class AsyncRequest {
//   constructor(options) {
//     this.baseURL = "https://gateway.marvel.com:443/v1/public/";
//     this.baseKey = "apikey=e43f19f4472459ad11df2d6d89eaef55";
//     this.method = options.method;
//     this.data = options.data;
//   }

//   async getSingleData() {
//     const url = `${this.baseURL}${this.method}/${this.data.id}?${this.baseKey}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }

//   async getNumerousData() {
//     const url = `${this.baseURL}${this.method}?limit=${this.data.limit}&offset=${this.data.offset}&${this.baseKey}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   }
// }

export function toggleStore(item, store, action) {
  switch (action) {
    case "add":
      store.update((arr) => {
        return [...arr, item];
      });
      break;
    case "remove":
      store.update((arr) => {
        return arr.filter((prod) => prod._id !== item._id);
      });
      break;
    default:
      console.log(action, "no defined");
      break;
  }
}

export async function getAllProducts() {
  const url = `https://capybara-frco.onrender.com/product`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getOneProduct(id) {
  const url = `https://capybara-frco.onrender.com/product/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
