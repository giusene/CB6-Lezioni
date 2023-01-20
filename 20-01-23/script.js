import { metodoGet, metodoGetCat } from "./metodiFetch.js";
import { filterByCategort } from "./filters.js";

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");

const hamburgerBtn = document.querySelector(".hamburger");
const tendina = document.querySelector(".tendina");
const productsList = document.querySelector(".products");
const footer = document.querySelector("footer");

const pallino = document.querySelector(".pallino");

const select = document.querySelector("#categorySelect");

select.addEventListener("change", e => {
  console.log(select.value);
  filterByCategort(select.value);
});

const cart = [];

btn1.addEventListener("click", () => {
  img1.classList.add("show");
  img2.classList.remove("show");
  img3.classList.remove("show");

  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
});

btn2.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.add("show");
  img3.classList.remove("show");

  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");
});

btn3.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.remove("show");
  img3.classList.add("show");

  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
});

hamburgerBtn.addEventListener("click", () => {
  tendina.classList.toggle("show");
});

metodoGet();
metodoGetCat();

export const cardCreator = (items, divId) => {
  const divDaAppendere = document.querySelector(divId);
  divDaAppendere.innerHTML = "";

  items.forEach(item => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", item.images[0]);
    imgEl.setAttribute("alt", "#");

    const h1El = document.createElement("h1");
    h1El.className = "title";
    h1El.textContent = item.title;

    const priceEl = document.createElement("p");
    priceEl.className = "price";
    priceEl.textContent = item.price;

    const descEl = document.createElement("p");
    descEl.className = "description";
    //   descEl.textContent = item.description;

    const addBtn = document.createElement("button");
    addBtn.textContent = "Aggiungi al Carrello";

    addBtn.addEventListener("click", () => {
      cartPopulator(item);
    });

    cardEl.append(imgEl, h1El, priceEl, descEl, addBtn);
    divDaAppendere.appendChild(cardEl);
  });
};

const cartCreation = () => {
  // PER QUANTITA
  // let cartTotal = 0;
  // cart.forEach(item => {
  //   cartTotal = cartTotal + item.qty;
  // });
  // pallino.textContent = cartTotal;
  //
  tendina.innerHTML = "";
  cart.forEach((item, index) => {
    const cartEl = document.createElement("div");
    cartEl.className = "cartRow";
    cartEl.innerHTML = `<p>Q.ty: ${item.qty}</p><p>${item.title}</p><p>${item.price}</p>`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", () => {
      cartEl.remove();
      cart.splice(index, 1);
    });

    cartEl.append(deleteBtn);
    tendina.appendChild(cartEl);
  });
};

const cartPopulator = item => {
  const newObj = {
    id: item.id,
    title: item.title,
    price: item.price,
    qty: 1,
  };

  const search = cart.filter(element => {
    if (element.id === newObj.id) {
      element.qty++;
      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newObj);
  }

  console.log(cart);
  cartCreation();
};

export const creazioneSelectCategories = arrayCat => {
  arrayCat.forEach(item => {
    const optionValue = document.createElement("option");
    optionValue.textContent = item.name;
    optionValue.setAttribute("value", item.id);
    select.appendChild(optionValue);
  });
};
