const postForm = document.querySelector("#postForm");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");

const categoryForm = document.querySelector("#categoryForm");
const catName = document.querySelector("#categoryName");
const catImage = document.querySelector("#categoryImage");

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
  funzionePost(newObj, "products");
});
// FINE POST -----> PRODOTTO

const funzionePost = (objBody, param) => {
  fetch(`https://api.escuelajs.co/api/v1/` + param, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(objBody), // body data type must match "Content-Type" header
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(
          `${param} NON CARICATO PER LE SEGUENTI RAGIONI: ` + data.message[0]
        );
      } else {
        alert(`${param} CARICATO CORRETTAMENTE!`);
        console.log(data);
      }
    })
    .catch(e => console.log("ERRORE: ", e));
};
