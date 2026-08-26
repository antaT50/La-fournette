if (!document.querySelector("#form-employe")) {
let btnOrder = document.querySelector(".btn-order");
let btnReserve=document.querySelector(".btn-reserve");
let btnContactHero=document.querySelector(".btn-contact");
let btnAdmin = document.querySelector(".btn-admin");
btnOrder.addEventListener("click", function() {
    document.getElementById("menu").scrollIntoView({behavior:"instant"});
});

btnReserve.addEventListener("click", function() {
    document.getElementById("Reservation-Commande").scrollIntoView({behavior: "instant"});
});

btnContactHero.addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({behavior: "instant"});
});

btnAdmin.addEventListener("click", function() {
  window.location.href = "table-employees.html";
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


/********************** Validation du formulaire de contact */

const btnContact = document.querySelector(".send-contact");

const inputContactForm = {
    name: document.getElementById("contact-name"),
    email: document.getElementById("contact-email"),
    message: document.getElementById("contact-message")
};

if (btnContact) {
    btnContact.addEventListener("click", validityContactForm);
}

function validityContactForm(e) {
    let valid = true;

    const errorContactName = document.getElementById("contactNameError");
    const errorContactEmail = document.getElementById("contactEmailError");
    const errorContactMessage = document.getElementById("contactMessageError");

    /* Vérification du Nom */
    if (inputContactForm.name.value.trim() === "") {
        errorContactName.textContent = "Le nom est obligatoire.";
        errorContactName.style.color = "#ffcc00";
        errorContactName.style.fontWeight = "bold";
        valid = false;
    } else if (!regexNom.test(inputContactForm.name.value.trim())) {
        errorContactName.textContent = "Le nom ne doit contenir que des lettres.";
        errorContactName.style.color = "#ffcc00";
        errorContactName.style.fontWeight = "bold";
        valid = false;
    } else {
        errorContactName.textContent = "";
    }

    /* Vérification de l'Email */
    if (inputContactForm.email.value.trim() === "") {
        errorContactEmail.textContent = "L'email est obligatoire.";
        errorContactEmail.style.color = "#ffcc00";
        errorContactEmail.style.fontWeight = "bold";
        valid = false;
    } else if (!regexEmail.test(inputContactForm.email.value.trim())) {
        errorContactEmail.textContent = "L'email est invalide.";
        errorContactEmail.style.color = "#ffcc00";
        errorContactEmail.style.fontWeight = "bold";
        valid = false;
    } else {
        errorContactEmail.textContent = "";
    }

    /* Vérification du Message */
    if (inputContactForm.message.value.trim() === "") {
        errorContactMessage.textContent = "Le message est obligatoire.";
        errorContactMessage.style.color = "#ffcc00";
        errorContactMessage.style.fontWeight = "bold";
        valid = false;
    } else {
        errorContactMessage.textContent = "";
    }

    if (valid === false) {
        e.preventDefault();
    }
}
  }

  const boutonAjout = document.querySelector(".ajout");
  const popupEmploye = document.querySelector("#popup-employe");
  const fermerEmploye = document.querySelector("#fermer-employe");
  const fermerFormulaire = document.querySelector("#fermer-formulaire");
  const formulaireEmploye = document.querySelector("#form-employe");
  const corpsTableau = document.querySelector(".employees-table tbody");
  const popupSuppression = document.querySelector("#popup-suppression");
  const confirmerSuppression = document.querySelector("#confirmer-suppression");
  const annulerSuppression = document.querySelector("#annuler-suppression");
  const toastSuppression = document.querySelector("#toast-suppression");
  let ligneASupprimer;

  if (formulaireEmploye) {
    boutonAjout.addEventListener("click", function() {
      popupEmploye.classList.add("active");
    });

    fermerEmploye.addEventListener("click", function() {
      popupEmploye.classList.remove("active");
    });

    fermerFormulaire.addEventListener("click", function() {
      popupEmploye.classList.remove("active");
    });

    const inputEmployeForm = {
      nom: document.getElementById("employe-nom"),
      prenom: document.getElementById("employe-prenom"),
      poste: document.getElementById("employe-poste"),
      adresse: document.getElementById("employe-adresse")
    };

    const regexNomEmploye = /^[A-Za-zÀ-ÿ\s'-]+$/;

    formulaireEmploye.addEventListener("submit", function(e) {
      let valid = true;
      const erreurs = {
        nom: document.getElementById("employe-nom-error"),
        prenom: document.getElementById("employe-prenom-error"),
        poste: document.getElementById("employe-poste-error"),
        adresse: document.getElementById("employe-adresse-error")
      };

      for (const nomChamp in inputEmployeForm) {
        if (inputEmployeForm[nomChamp].value.trim() === "") {
          erreurs[nomChamp].textContent = "Ce champ est obligatoire.";
          erreurs[nomChamp].style.color = "#ffcc00";
          erreurs[nomChamp].style.fontWeight = "bold";
          valid = false;
        } else if ((nomChamp === "nom" || nomChamp === "prenom") && !regexNomEmploye.test(inputEmployeForm[nomChamp].value.trim())) {
          erreurs[nomChamp].textContent = "Utilisez seulement des lettres.";
          erreurs[nomChamp].style.color = "#ffcc00";
          erreurs[nomChamp].style.fontWeight = "bold";
          valid = false;
        } else {
          erreurs[nomChamp].textContent = "";
        }
      }

      if (valid === false) {
        e.preventDefault();
        return;
      }

      const ligne = document.createElement("tr");
      ligne.innerHTML = `<td>EMP${String(corpsTableau.rows.length + 1).padStart(3, "0")}</td><td>${inputEmployeForm.prenom.value}</td><td>${inputEmployeForm.nom.value}</td><td>${inputEmployeForm.adresse.value}</td><td>${inputEmployeForm.poste.value}</td><td>-</td><td><button type="button" aria-label="Modifier" title="Modifier"><img src="https://icons.getbootstrap.com/assets/icons/pencil-square.svg" alt=""></button> <button type="button" aria-label="Supprimer" title="Supprimer"><img src="https://icons.getbootstrap.com/assets/icons/trash3.svg" alt=""></button></td>`;
      corpsTableau.appendChild(ligne);
      formulaireEmploye.reset();
      popupEmploye.classList.remove("active");
    });

    corpsTableau.addEventListener("click", function(e) {
      if (e.target.closest("td:last-child button:last-child")) {
        ligneASupprimer = e.target.closest("tr");
        popupSuppression.classList.add("active");
      }
    });

    confirmerSuppression.addEventListener("click", function() {
      ligneASupprimer.remove();
      popupSuppression.classList.remove("active");
      toastSuppression.classList.add("active");
      setTimeout(function() {
        toastSuppression.classList.remove("active");
      }, 2000);
    });

    annulerSuppression.addEventListener("click", function() {
      popupSuppression.classList.remove("active");
    });
  }