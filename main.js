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
  let valid = true;

  const errorName = document.getElementById("nameError");
  const errorEmail = document.getElementById("emailError");
  const errorPhone = document.getElementById("phoneError");
  const errorMenu = document.getElementById("menuError");
  const errorQuantity = document.getElementById("quantityError");
  const errorDate = document.getElementById("dateError");
  const errorTime = document.getElementById("timeError");
  const errorGuests = document.getElementById("guestsError");

  if (inputRequiredForm.name.value.trim() === "") {
    errorName.textContent = "Le nom est obligatoire.";
    errorName.style.color = "#ffcc00";
    errorName.style.fontWeight = "bold";
    valid = false;
  } else if (!regexNom.test(inputRequiredForm.name.value.trim())) {
    errorName.textContent = "Le nom ne doit contenir que des lettres.";
    errorName.style.color = "#ffcc00";
    errorName.style.fontWeight = "bold";
    valid = false;
  } else {
    errorName.textContent = "";
  }

  if (inputRequiredForm.email.value.trim() === "") {
    errorEmail.textContent = "L'email est obligatoire.";
    errorEmail.style.color = "#ffcc00";
    errorEmail.style.fontWeight = "bold";
    valid = false;
  } else if (!regexEmail.test(inputRequiredForm.email.value.trim())) {
    errorEmail.textContent = "L'email est invalide.";
    errorEmail.style.color = "#ffcc00";
    errorEmail.style.fontWeight = "bold";
    valid = false;
  } else {
    errorEmail.textContent = "";
  }

  if (inputRequiredForm.phone.value.trim() === "") {
    errorPhone.textContent = "Le téléphone est obligatoire.";
    errorPhone.style.color = "#ffcc00";
    errorPhone.style.fontWeight = "bold";
    valid = false;
  } else if (!regexTel.test(inputRequiredForm.phone.value.trim())) {
    errorPhone.textContent = "Le téléphone doit contenir 8 chiffres.";
    errorPhone.style.color = "#ffcc00";
    errorPhone.style.fontWeight = "bold";
    valid = false;
  } else {
    errorPhone.textContent = "";
  }

  if (inputRequiredForm.menu.value.trim() === "") {
    errorMenu.textContent = "Veuillez choisir un menu ou un plat.";
    errorMenu.style.color = "#ffcc00";
    errorMenu.style.fontWeight = "bold";
    valid = false;
  } else {
    errorMenu.textContent = "";
  }

  if (inputRequiredForm.quantity.value.trim() === "") {
    errorQuantity.textContent = "La quantité est obligatoire.";
    errorQuantity.style.color = "#ffcc00";
    errorQuantity.style.fontWeight = "bold";
    valid = false;
  } else {
    errorQuantity.textContent = "";
  }

  if (inputRequiredForm.date.value.trim() === "") {
    errorDate.textContent = "La date est obligatoire.";
    errorDate.style.color = "#ffcc00";
    errorDate.style.fontWeight = "bold";
    valid = false;
  } else {
    errorDate.textContent = "";
  }

  if (inputRequiredForm.time.value.trim() === "") {
    errorTime.textContent = "L'heure est obligatoire.";
    errorTime.style.color = "#ffcc00";
    errorTime.style.fontWeight = "bold";
    valid = false;
  } else {
    errorTime.textContent = "";
  }

  if (inputRequiredForm.guests.value.trim() === "") {
    errorGuests.textContent = "Le nombre de personnes est obligatoire.";
    errorGuests.style.color = "#ffcc00";
    errorGuests.style.fontWeight = "bold";
    valid = false;
  } else {
    errorGuests.textContent = "";
  }

  if (valid === false) {
    e.preventDefault();
  }
}

/*****section témoignages */

/*  1 : Sélection des éléments HTML */
let slides = document.querySelectorAll("#temoignages .slide");
let btnSuiv = document.querySelector(".suiv");
let btnPrec = document.querySelector(".prec");
let index = 0;

/* 2 : Fonction pour afficher la carte active */
function afficherSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[n].classList.add("active");
}

/* 3 : Clic sur le bouton Suivant */
btnSuiv.addEventListener("click", function() {
    index = index + 1;
    if (index >= slides.length) {
        index = 0;
    }
    afficherSlide(index);
});

/*  4 : Clic sur le bouton Précédent */
btnPrec.addEventListener("click", function() {
    index = index - 1;
    if (index < 0) {
        index = slides.length - 1;
    }
    afficherSlide(index);
});

/* 5 : Defilement automatique toutes les 4 secondes */
setInterval(function() {
    index = index + 1;
    if (index >= slides.length) {
        index = 0;
    }
    afficherSlide(index);
}, 4000);