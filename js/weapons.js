const weapons = [
  {
    id:"weapon1",
    name: "Коса",
    type: "Двуручное оружие",
    description: "Мощное оружие с широкими ударами.",
    image: "../images/Scyte.webp",
    gif: "../images/ScytheSuperSlash.webp"
  },
  {
    id:"weapon2",
    name: "Когти",
    type: "Парное оружие",
    description: "Быстрое оружие для атак на близкой дистанции.",
    image: "../images/claws.webp",
    gif: "../images/LynxClawsDoubleSlash.webp"
  },
  {
    id:"weapon3",
    name: "Пластинчатый меч",
    type: "Одноручное оружие",
    description: "Универсальное оружие для разных ситуаций.",
    image: "../images/sword.webp",
    gif: "../images/CompositeSwordSuperSlash.webp"
  },
  {
    id:"weapon4",
    name: "Нунчаки",
    type: "Парное оружие",
    description: "Оружие для быстрых комбинаций.",
    image: "../images/Nunchacku.webp",
    gif: "../images/NunchakuSuperSlash.webp"
  },
  {
    id:"weapon5",
    name: "Топоры",
    type: "Парное оружие",
    description: "Мощное оружие с тяжёлыми ударами.",
    image: "../images/Reaver.webp",
    gif: "../images/ReaverSpinningSlash.webp"
  }
];

let currentWeapon = 0;
let weaponTimer;

const weaponName = document.querySelector("#weaponName");
const weaponType = document.querySelector("#weaponType");
const weaponDescription = document.querySelector("#weaponDescription");
const weaponImage = document.querySelector("#weaponImage");
const weaponGif = document.querySelector("#weaponGif");
const weaponNumber = document.querySelector("#weaponNumber");
const weaponDots = document.querySelector("#weaponDots");

function showWeapon() {
  const weapon = weapons[currentWeapon];

  weaponName.textContent = weapon.name;
  weaponType.textContent = weapon.type;
  weaponDescription.textContent = weapon.description;

  weaponImage.src = weapon.image;
  weaponImage.alt = weapon.name;

  weaponGif.src = weapon.gif;
  weaponGif.alt = "Анимация боя: " + weapon.name;

  weaponNumber.textContent =
    String(currentWeapon + 1).padStart(2, "0") +
    " / " +
    String(weapons.length).padStart(2, "0");

  updateWeaponDots();
}


function updateWeaponDots() {
  weaponDots.innerHTML = "";

  weapons.forEach((weapon, index) => {
    const dot = document.createElement("button");

    dot.className = "slider-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", "Оружие: " + weapon.name);

    if (index === currentWeapon) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      currentWeapon = index;
      showWeapon();
      restartWeaponTimer();
    });

    weaponDots.appendChild(dot);
  });
}

function openWeaponById(id) {
    const index = weapons.findIndex(
        weapon => weapon.id === id
    );

    if (index === -1) return;

    currentWeapon = index;

    showWeapon();
    restartWeaponTimer();

    weaponImage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    weaponImage.classList.add("search-highlight");

    setTimeout(() => {
        weaponImage.classList.remove("search-highlight");
    }, 3000);
}


function nextWeapon() {
  currentWeapon = (currentWeapon + 1) % weapons.length;
  showWeapon();
}

function prevWeapon() {
  currentWeapon =
    (currentWeapon - 1 + weapons.length) % weapons.length;
  showWeapon();
}

function restartWeaponTimer() {
  clearInterval(weaponTimer);
  weaponTimer = setInterval(nextWeapon, 5000);
}

document.querySelector("#weaponNext").addEventListener("click", () => {
  nextWeapon();
  restartWeaponTimer();
});

document.querySelector("#weaponPrev").addEventListener("click", () => {
  prevWeapon();
  restartWeaponTimer();
});

showWeapon();
restartWeaponTimer();


const enchantments = [
  {
    id:"enchantments1",
    name: "Ярость бури",
    description: "Особое зачарование оружия.",
    effect: "Эффект: особая атака.",
    image: "../images/Tornado.webp"
  },
  {
    id:"enchantments2",
    name: "Яд",
    description: "Зачарование с отравляющим эффектом.",
    effect: "Эффект: отравление противника.",
    image: "../images/Intoxication.webp"
  },
  {
    id:"enchantments3",
    name: "Кровотечение",
    description: "Зачарование с дополнительным эффектом урона.",
    effect: "Эффект: дополнительный урон.",
    image: "../images/Bleeding.webp"
  },
  {
    id:"enchantments4",
    name: "Оглушение",
    description: "Зачарование с эффектом оглушения.",
    effect: "Эффект: временное оглушение.",
    image: "../images/Stun.webp"
  },
  {
    id:"enchantments5",
    name: "Восстановление",
    description: "Зачарование с защитным эффектом.",
    effect: "Эффект: восстановление.",
    image: "../images/Regeneration.webp"
  }
];

let currentEnchant = 0;
let enchantTimer;

const enchantName = document.querySelector("#enchantName");
const enchantDescription = document.querySelector("#enchantDescription");
const enchantEffect = document.querySelector("#enchantEffect");
const enchantImage = document.querySelector("#enchantImage");
const enchantNumber = document.querySelector("#enchantNumber");
const enchantDots = document.querySelector("#enchantDots");

function showEnchant() {
  const enchant = enchantments[currentEnchant];

  enchantName.textContent = enchant.name;
  enchantDescription.textContent = enchant.description;
  enchantEffect.textContent = enchant.effect;
  enchantImage.src = enchant.image;
  enchantImage.alt = enchant.name;

  enchantNumber.textContent =
    String(currentEnchant + 1).padStart(2, "0") +
    " / " +
    String(enchantments.length).padStart(2, "0");

  updateEnchantDots();
}

function updateEnchantDots() {
  enchantDots.innerHTML = "";

  enchantments.forEach((enchant, index) => {
    const dot = document.createElement("button");

    dot.className = "slider-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", "Зачарование: " + enchant.name);

    if (index === currentEnchant) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      currentEnchant = index;
      showEnchant();
      restartEnchantTimer();
    });

    enchantDots.appendChild(dot);
  });
}

function openEnchantById(id) {
    const index = enchantments.findIndex(
        enchantment => enchantment.id === id
    );

    if (index === -1) return;

    currentWeapon = index;

    showEnchant();
    restartEnchantTimer();

    enchantImage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    enchantImage.classList.add("search-highlight");

    setTimeout(() => {
        enchantImage.classList.remove("search-highlight");
    }, 3000);
}

function nextEnchant() {
  currentEnchant = (currentEnchant + 1) % enchantments.length;
  showEnchant();
}

function prevEnchant() {
  currentEnchant =
    (currentEnchant - 1 + enchantments.length) % enchantments.length;
  showEnchant();
}

function restartEnchantTimer() {
  clearInterval(enchantTimer);
  enchantTimer = setInterval(nextEnchant, 5000);
}

document.querySelector("#enchantNext").addEventListener("click", () => {
  nextEnchant();
  restartEnchantTimer();
});

document.querySelector("#enchantPrev").addEventListener("click", () => {
  prevEnchant();
  restartEnchantTimer();
});

showEnchant();
restartEnchantTimer();
