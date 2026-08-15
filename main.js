let btnOrder = document.querySelector(".btn-order");
btnOrder.addEventListener("click", function() {
    document.getElementById("menu").scrollIntoView({behavior: "smooth"});
});
let btnEntrees = document.querySelector('[data-popup="popup-entrees"]');
let popupEntrees = document.querySelector("#popup-entrees");


 btnEntrees.addEventListener("click", function() {
    popupEntrees.classList.toggle("active");
});
/***fermer popup entrees */
let closeEntrees = document.querySelector("#popup-entrees .close-popup");

closeEntrees.addEventListener("click", function() {
    popupEntrees.classList.remove("active");
});

let btnPlats = document.querySelector("[data-popup='popup-plats']");
let popupPlats = document.querySelector("#popup-plats");

btnPlats.addEventListener("click", function() {
    popupPlats.classList.toggle("active");
}); 

/**fermer popup plats */
let closePlats = document.querySelector("#popup-plats .close-popup");

closePlats.addEventListener("click", function() {
    popupPlats.classList.remove("active");
});

let btnDesserts = document.querySelector("[data-popup='popup-desserts']");
let popupDesserts = document.querySelector("#popup-desserts");
btnDesserts.addEventListener("click", function() {
    popupDesserts.classList.toggle("active");
});

/**fermer popup desserts */
let closeDesserts = document.querySelector("#popup-desserts .close-popup");

closeDesserts.addEventListener("click", function() {
    popupDesserts.classList.remove("active");
});

let btnBoissons = document.querySelector("[data-popup='popup-boissons']");
let popupBoissons = document.querySelector("#popup-boissons");
btnBoissons.addEventListener("click", function() {
    popupBoissons.classList.toggle("active");
});

/**fermer popup boissons */
let closeBoissons = document.querySelector("#popup-boissons .close-popup");

closeBoissons.addEventListener("click", function() {
    popupBoissons.classList.remove("active");
});

/**********************Validation de formulaire */

const validationForm = document.querySelectorAll(".send-f");

const inputRequiredForm = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
    menu: document.getElementById("Nmenu"),
    quantity: document.getElementById("quantity"),
    date: document.getElementById("date"),
    time: document.getElementById("time"),
    guests: document.getElementById("guests"),
    orderDetails: document.getElementById("orderDetails")
};

const regexNom = /^[A-Za-zÀ-ÿ\s'-]+$/;
const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
const regexTel = /^\d{8}$/;

for (let i = 0; i < validationForm.length; i++) {
  validationForm[i].addEventListener("click", validityForm);
}
function validityForm(e) {
 let champVide =
  inputRequiredForm.name.value.trim() === "" ||
  inputRequiredForm.email.value.trim() === "" ||
  inputRequiredForm.phone.value.trim() === "" ||
  inputRequiredForm.menu.value.trim() === "" ||
  inputRequiredForm.quantity.value.trim() === "" ||
  inputRequiredForm.date.value.trim() === "" ||
  inputRequiredForm.time.value.trim() === "" ||
  inputRequiredForm.guests.value.trim() === "";

  if (champVide) {
    e.preventDefault();
    alert("Veuillez remplir tous les champs.");
  }
  else if ((!regexNom.test(inputRequiredForm.name.value.trim()))
    ||(!regexEmail.test(inputRequiredForm.email.value.trim()))
||(!regexTel.test(inputRequiredForm.phone.value.trim()) ) ){
    e.preventDefault();
    alert("Format incorrect. Veuillez entrer un champ valide.");
  }
  else{
    
}
}
