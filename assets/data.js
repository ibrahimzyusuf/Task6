const products = [
  {
    id: 0,
    image: "./assets/img/product-1.webp",
    title: "Red T-Shirt",
    price: 120,
  },
  {
    id: 1,
    image: "./assets/img/product-2.webp",
    title: "Sport sneakers",
    price: 100,
  },
  {
    id: 2,
    image: "./assets/img/product-3.webp",
    title: " Colorful socks",
    price: 20,
  },
  {
    id: 3,
    image: "./assets/img/product-4.webp",
    title: "Sport Watch",
    price: 20,
  },
];
localStorage.setItem("product", JSON.stringify(products));
