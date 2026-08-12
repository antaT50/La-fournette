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
