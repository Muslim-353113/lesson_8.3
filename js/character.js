const characters = [
    {
        id: "shadow",
        name: "ТЕНЬ",
        role: "ГЛАВНЫЙ ГЕРОЙ",
        image: "../images/Shadow.webp",
        description: "Когда-то великий воин, который открыл Врата Теней и потерял своё тело. Теперь он должен победить демонов и исправить свою ошибку."
    },
    {
        id: "may",
        name: "МЭЙ",
        role: "СПУТНИЦА ТЕНИ",
        image: "../images/May.webp",
        description: "Близкий Тени человек, который играет важную роль в его путешествии. Её судьба тесно связана с историей главного героя."
    },
    {
        id: "sensei",
        name: "СЕНСЕЙ",
        role: "НАСТАВНИК",
        image: "../images/Teacher.webp",
        description: "Мудрый мастер боевых искусств. Он помогает Тени совершенствовать навыки и сопровождает его на пути воина."
    },
    {
        id: "merchant",
        name: "ТОРГОВЕЦ",
        role: "ПОСТАВЩИК СНАРЯЖЕНИЯ",
        image: "../images/Shop.png",
        description: "Торговец предлагает Тени оружие, доспехи и экипировку, необходимые для подготовки к новым сражениям."
    }
];

let currentCharacter = 0;
let sliderTimer;

const characterImg = document.querySelector("#characterImg");
const characterName = document.querySelector("#characterName");
const characterRole = document.querySelector("#characterRole");
const characterDescription = document.querySelector("#characterDescription");
const characterDots = document.querySelector("#characterDots");

function showCharacter(index) {
    currentCharacter = (index + characters.length) % characters.length;

    const character = characters[currentCharacter];

    characterImg.style.opacity = "0";

    setTimeout(() => {
        characterImg.src = character.image;
        characterImg.alt = character.name;

        characterName.textContent = character.name;
        characterRole.textContent = character.role;
        characterDescription.textContent = character.description;

        characterImg.style.opacity = "1";
    }, 200);

    characterDots.innerHTML = "";

    characters.forEach((item, i) => {
        const dot = document.createElement("button");

        dot.className = "character-dot";
        dot.setAttribute("aria-label", "Персонаж " + item.name);
            

        if (i === currentCharacter) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            showCharacter(i);
            restartSlider();
        });

        characterDots.appendChild(dot);
    });
}

function openCharacterById(id) {
    const index = characters.findIndex(
        character => character.id === id
    );

    if (index === -1) return;

    showCharacter(index);
    restartSlider();

    document.querySelector("#characterImg")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    characterImg.classList.add("search-highlight");

    setTimeout(() => {
        characterImg.classList.remove("search-highlight");
    }, 3000);
}

function nextCharacter() {
    showCharacter(currentCharacter + 1);
}

function prevCharacter() {
    showCharacter(currentCharacter - 1);
}

function restartSlider() {
    clearInterval(sliderTimer);

    sliderTimer = setInterval(() => {
        nextCharacter();
    }, 5000);
}

document.querySelector("#nextCharacter")
    .addEventListener("click", () => {
        nextCharacter();
        restartSlider();
    });

document.querySelector("#prevCharacter")
    .addEventListener("click", () => {
        prevCharacter();
        restartSlider();
    });

showCharacter(0);
restartSlider();