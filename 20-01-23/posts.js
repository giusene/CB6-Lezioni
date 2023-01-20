import { funzionePost, elimina } from "./metodiFetch.js";

const postForm = document.querySelector("#postForm");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");

const categoryForm = document.querySelector("#categoryForm");
const catName = document.querySelector("#categoryName");
const catImage = document.querySelector("#categoryImage");

const deleteProductForm = document.querySelector("#deleteProductForm");
const inputIdProduct = document.querySelector("#productId");

categoryForm.addEventListener("submit", event => {
  event.preventDefault();

  const newObj = {
    name: catName.value,
    image: catImage.value,
  };
  console.log(newObj);
  funzionePost(newObj, "categories");
});

// POST ----> PRODOTTO
postForm.addEventListener("submit", event => {
  const method = event.target[0].value;
  const idProduct = "/" + event.target[1].value;
  // previene il comportamente di defualt del submit
  event.preventDefault();

  // nuovo oggetto popolato con i valori del form
  if (parseInt(inputCategory.value) < 1) {
    alert("la categoria deve essere maggiore di 0");
    return;
  }

  const newObj = {
    price: parseInt(inputPrice.value),
    title: inputTitle.value,
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImage.value],
  };
  console.log(newObj);
  if (method === "POST") {
    funzionePost(newObj, "products", method);
  } else {
    funzionePost(newObj, "products", method, idProduct);
  }
});

deleteProductForm.addEventListener("submit", event => {
  event.preventDefault();
  // utilizzo del paramentro event per ottenere il valore degli input del form
  // console.log(event.target[0].value);
  elimina("products", inputIdProduct.value);
});
