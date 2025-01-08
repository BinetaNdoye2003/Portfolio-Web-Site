
// Validation du formulaire de contact ===
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Empêche l'envoi du formulaire par défaut

            // Récupère les champs
            const firstName = document.getElementById("first-name").value.trim();
            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Vérifie les champs
            if (!firstName || !name || !phone || !email || !message) {
                alert("Veuillez remplir tous les champs.");
                return;
            }

            if (!validatePhone(phone)) {
                alert("Veuillez entrer un numéro de téléphone valide (9 chiffres).");
                return;
            }

            if (!validateEmail(email)) {
                alert("Veuillez entrer une adresse email valide.");
                return;
            }

            // Si tout est correct, affiche un message de confirmation
            alert("Merci pour votre message ! Je vous répondrai bientôt.");
            contactForm.reset(); // Réinitialise le formulaire
        });
    }
});

// Fonction pour valider les adresses email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction pour valider le numéro de téléphone (9 chiffres)
function validatePhone(phone) {
    const phoneRegex = /^\d{9}$/;
    return phoneRegex.test(phone);
}


// === Bouton retour en haut ===
// Ajoute un bouton "Retour en haut" visible uniquement après défilement
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "↑";
backToTopButton.id = "back-to-top";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



