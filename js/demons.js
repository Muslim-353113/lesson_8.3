const demonCards = document.querySelectorAll(".demon-card");
const demonModal = document.querySelector("#demonModal");

const modalImage = document.querySelector("#modalImage");
const modalName = document.querySelector("#modalName");
const modalCategory = document.querySelector("#modalCategory");
const modalDescription = document.querySelector("#modalDescription");
const modalWeapon = document.querySelector("#modalWeapon");

const modalClose = document.querySelector("#modalClose");

demonCards.forEach(card => {
    card.addEventListener("click", () => {

        const image = card.querySelector(".demon-image img");

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        modalName.textContent = card.dataset.name;
        modalCategory.textContent = card.dataset.category;
        modalDescription.textContent = card.dataset.description;
        modalWeapon.textContent = card.dataset.weapon;

        demonModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

function closeDemonModal() {
    demonModal.classList.remove("active");
    document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeDemonModal);

demonModal.addEventListener("click", event => {
    if (event.target === demonModal) {
        closeDemonModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeDemonModal();
    }
});