const postForm = document.querySelector("#postForm");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");

postForm.addEventListener("submit", event => {
  // previene il comportamente di defualt del submit
  event.preventDefault();

  // nuovo oggetto popolato con i valori del form
  const newObj = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImage.value],
  };
  funzionePost(newObj);
});

const funzionePost = objBody => {
  fetch("https://api.escuelajs.co/api/v1/products", {
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
    .then(data => console.log("RISPOSTA POST: ", data))
    .catch(e => console.log("ERRORE: ", e));
};
