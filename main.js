document.addEventListener('DOMContentLoaded', () => {
    
    const regexNom = /^[A-Za-zÀ-ÿ\s'-]+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexTel = /^\d{8,}$/;

    
    const btnOrder = document.querySelector(".btn-order");
    const btnReserve = document.querySelector(".btn-reserve");
    const btnContactHero = document.querySelector(".btn-contact");
    const btnAdmin = document.querySelector(".btn-admin");

    if (btnOrder) {
        btnOrder.addEventListener("click", () => {
            document.getElementById("menu")?.scrollIntoView({ behavior: "instant" });
        });
    }

    if (btnReserve) {
        btnReserve.addEventListener("click", () => {
            document.getElementById("Reservation-Commande")?.scrollIntoView({ behavior: "instant" });
        });
    }

    if (btnContactHero) {
        btnContactHero.addEventListener("click", () => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "instant" });
        });
    }

    if (btnAdmin) {
        btnAdmin.addEventListener("click", () => {
            window.location.href = "table-employees.html";
        });
    }

    // ==========================================
    // 2. GESTION DES POPUPS MENU (ENTRÉES, PLATS, ETC.)
    // ==========================================
    const setupPopup = (triggerSelector, popupId) => {
        const btn = document.querySelector(triggerSelector);
        const popup = document.querySelector(popupId);
        if (!btn || !popup) return;

        const closeBtn = popup.querySelector(".close-popup");

        btn.addEventListener("click", () => popup.classList.toggle("active"));
        if (closeBtn) {
            closeBtn.addEventListener("click", () => popup.classList.remove("active"));
        }
    };

    setupPopup('[data-popup="popup-entrees"]', "#popup-entrees");
    setupPopup('[data-popup="popup-plats"]', "#popup-plats");
    setupPopup('[data-popup="popup-desserts"]', "#popup-desserts");
    setupPopup('[data-popup="popup-boissons"]', "#popup-boissons");

    // ==========================================
    // 3. COMMANDE DIRECTE D'UN PLAT (BOUTON COMMANDER)
    // ==========================================
    const buyButtons = document.querySelectorAll('.btn-commander button');
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const itemCard = e.target.closest('.item');
            if (!itemCard) return;

            const platNom = itemCard.querySelector('.nom-plats h3')?.innerText || "votre plat";
            const platPrix = itemCard.querySelector('.prix p')?.innerText || "";

            const adresse = prompt(`Commande de : ${platNom} (${platPrix})\nVeuillez entrer votre adresse de livraison :`);

            if (adresse) {
                alert(`Merci ! Votre commande pour "${platNom}" a été validée.\nAdresse de livraison : ${adresse}`);
                const activePopup = e.target.closest('.popup-overlay');
                if (activePopup) {
                    activePopup.classList.remove('active');
                    activePopup.style.display = 'none';
                }
            }
        });
    });

    // ==========================================
    // 4. VALIDATION FORMULAIRE RESERVATION / COMMANDE
    // ==========================================
    const validationFormButtons = document.querySelectorAll(".send-f");
    
    if (validationFormButtons.length > 0) {
        const inputRequiredForm = {
            name: document.getElementById("name"),
            email: document.getElementById("email"),
            phone: document.getElementById("phone"),
            menu: document.getElementById("Nmenu"),
            quantity: document.getElementById("quantity"),
            date: document.getElementById("date"),
            time: document.getElementById("time"),
            guests: document.getElementById("guests")
        };

        validationFormButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                let valid = true;

                const checkField = (input, errorId, errorMsg, regex = null) => {
                    const errorElem = document.getElementById(errorId);
                    if (!errorElem || !input) return;

                    const val = input.value.trim();
                    if (val === "") {
                        errorElem.textContent = errorMsg.required;
                        errorElem.style.color = "#ffcc00";
                        errorElem.style.fontWeight = "bold";
                        valid = false;
                    } else if (regex && !regex.test(val)) {
                        errorElem.textContent = errorMsg.invalid;
                        errorElem.style.color = "#ffcc00";
                        errorElem.style.fontWeight = "bold";
                        valid = false;
                    } else {
                        errorElem.textContent = "";
                    }
                };

                checkField(inputRequiredForm.name, "nameError", { required: "Le nom est obligatoire.", invalid: "Le nom ne doit contenir que des lettres." }, regexNom);
                checkField(inputRequiredForm.email, "emailError", { required: "L'email est obligatoire.", invalid: "L'email est invalide." }, regexEmail);
                checkField(inputRequiredForm.phone, "phoneError", { required: "Le téléphone est obligatoire.", invalid: "Numéro de téléphone invalide." }, regexTel);
                checkField(inputRequiredForm.menu, "menuError", { required: "Veuillez choisir un menu ou un plat." });
                checkField(inputRequiredForm.quantity, "quantityError", { required: "La quantité est obligatoire." });
                checkField(inputRequiredForm.date, "dateError", { required: "La date est obligatoire." });
                checkField(inputRequiredForm.time, "timeError", { required: "L'heure est obligatoire." });
                checkField(inputRequiredForm.guests, "guestsError", { required: "Le nombre de personnes est obligatoire." });

                if (!valid) e.preventDefault();
            });
        });
    }

    // ==========================================
    // 5. SLIDER TEMOIGNAGES
    // ==========================================
    const slides = document.querySelectorAll("#temoignages .slide");
    const btnSuiv = document.querySelector(".suiv");
    const btnPrec = document.querySelector(".prec");

    if (slides.length > 0) {
        let index = 0;

        const afficherSlide = (n) => {
            slides.forEach(slide => slide.classList.remove("active"));
            slides[n].classList.add("active");
        };

        if (btnSuiv) {
            btnSuiv.addEventListener("click", () => {
                index = (index + 1) % slides.length;
                afficherSlide(index);
            });
        }

        if (btnPrec) {
            btnPrec.addEventListener("click", () => {
                index = (index - 1 + slides.length) % slides.length;
                afficherSlide(index);
            });
        }

        setInterval(() => {
            index = (index + 1) % slides.length;
            afficherSlide(index);
        }, 4000);
    }

    // ==========================================
    // 6. FORMULAIRE DE CONTACT
    // ==========================================
    const btnContact = document.querySelector(".send-contact");
    if (btnContact) {
        btnContact.addEventListener("click", (e) => {
            let valid = true;
            const nameInput = document.getElementById("contact-name");
            const emailInput = document.getElementById("contact-email");
            const messageInput = document.getElementById("contact-message");

            const errorName = document.getElementById("contactNameError");
            const errorEmail = document.getElementById("contactEmailError");
            const errorMessage = document.getElementById("contactMessageError");

            if (!nameInput.value.trim()) {
                errorName.textContent = "Le nom est obligatoire.";
                errorName.style.color = "#ffcc00";
                valid = false;
            } else {
                errorName.textContent = "";
            }

            if (!emailInput.value.trim() || !regexEmail.test(emailInput.value.trim())) {
                errorEmail.textContent = "Email invalide.";
                errorEmail.style.color = "#ffcc00";
                valid = false;
            } else {
                errorEmail.textContent = "";
            }

            if (!messageInput.value.trim()) {
                errorMessage.textContent = "Le message est obligatoire.";
                errorMessage.style.color = "#ffcc00";
                valid = false;
            } else {
                errorMessage.textContent = "";
            }

            if (!valid) e.preventDefault();
        });
    }

    // ==========================================
    // 7. GESTION DU TABLEAU EMPLOYES (MODAL BOOTSTRAP)
    // ==========================================
    const addEmployeeForm = document.getElementById('addEmployeeForm');
    const tableBody = document.getElementById('employeeTableBody') || document.querySelector('.employees-table tbody');
    const employeeModalElement = document.getElementById('addEmployeeModal');

    if (addEmployeeForm && tableBody) {
        addEmployeeForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const matricule = document.getElementById('empMatricule')?.value.trim() || `EMP00${tableBody.children.length + 1}`;
            const prenom = document.getElementById('empPrenom')?.value.trim() || document.getElementById('employe-prenom')?.value.trim();
            const nom = document.getElementById('empNom')?.value.trim() || document.getElementById('employe-nom')?.value.trim();
            const adresse = document.getElementById('empAdresse')?.value.trim() || document.getElementById('employe-adresse')?.value.trim();
            const poste = document.getElementById('empPoste')?.value.trim() || document.getElementById('employe-poste')?.value.trim();
            const salaireRaw = document.getElementById('empSalaire')?.value.trim() || "";

            const salaire = salaireRaw ? (salaireRaw.toLowerCase().includes('fcfa') ? salaireRaw : `${salaireRaw} FCFA`) : "—";

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td class="fw-bold text-secondary ps-3">${matricule}</td>
                <td>${prenom}</td>
                <td>${nom}</td>
                <td>${adresse}</td>
                <td class="fw-medium">${poste}</td>
                <td class="fw-semibold">${salaire}</td>
                <td class="text-end pe-3">
                    <button class="btn btn-sm btn-outline-secondary me-1" type="button" title="Modifier">
                        <img src="https://icons.getbootstrap.com/assets/icons/pencil-square.svg" alt="Modifier" width="16" height="16">
                    </button>
                    <button class="btn btn-sm btn-outline-danger btn-delete" type="button" title="Supprimer">
                        <img src="https://icons.getbootstrap.com/assets/icons/trash3.svg" alt="Supprimer" width="16" height="16">
                    </button>
                </td>
            `;

            tableBody.appendChild(newRow);

            addEmployeeForm.reset();

            if (employeeModalElement && typeof bootstrap !== 'undefined') {
                const modalInstance = bootstrap.Modal.getInstance(employeeModalElement) || new bootstrap.Modal(employeeModalElement);
                modalInstance.hide();
            } else {
                const popupEmploye = document.querySelector("#popup-employe");
                if (popupEmploye) popupEmploye.classList.remove("active");
            }
        });

        tableBody.addEventListener('click', (e) => {
            const deleteBtn = e.target.closest('.btn-delete') || e.target.closest("td:last-child button:last-child");
            if (deleteBtn) {
                const row = deleteBtn.closest('tr');
                if (confirm('Voulez-vous vraiment supprimer cet employé ?')) {
                    row.remove();
                }
            }
        });
    }
});
