(() => {
  const bosses = [
    {
      id:"raid-boos1",
      name: "АРХОС",
      rank: "ПЕРВЫЙ В СПИСКЕ",
      description:
        "Могущественный противник Подземного мира. Его сила и выносливость делают сражение серьёзным испытанием даже для подготовленных игроков.",
      difficulty: 10,
      tip:
        "Не торопись атаковать. Изучай движения босса, следи за моментами для атаки и помогай своей команде.",
      image: "../images/Boss_arkhos.webp"
    },
    {
      id:"raid-boos2",
      name: "ДРАКАЙНА",
      rank: "ВТОРОЙ В СПИСКЕ",
      description:
        "Опасная противница, которая не позволяет расслабиться ни на секунду. Для победы потребуется хорошая реакция и слаженная команда.",
      difficulty: 9,
      tip:
        "Следи за её атаками и не трать все силы в начале сражения.",
      image: "../images/Boss_war.webp"
    },
    {
      id:"raid-boos3",
      name: "ТЕНЕБРИС",
      rank: "ТРЕТИЙ В СПИСКЕ",
      description:
        "Загадочный босс, скрывающий свою настоящую силу. Его сражение требует терпения и правильного выбора экипировки.",
      difficulty: 9,
      tip:
        "Подготовь оружие заранее и старайся не пропускать моменты для контратаки.",
      image: "../images/Boss_tenebris.webp"
    },
    {
      id:"raid-boos4",
      name: "ВУЛКАН",
      rank: "ЧЕТВЁРТЫЙ В СПИСКЕ",
      description:
        "Мощный противник, способный доставить много проблем неподготовленным бойцам. Его опасность заключается в сильных атаках.",
      difficulty: 8,
      tip:
        "Не забывай об улучшении экипировки и выбирай подходящее оружие.",
      image: "../images/Boss_fire.webp"
    },
    {
      id:"raid-boos5",
      name: "МЕГАЛИТ",
      rank: "ПЯТЫЙ В СПИСКЕ",
      description:
        "Выносливый противник, сражение с которым может затянуться. Здесь особенно важны терпение и командная поддержка.",
      difficulty: 8,
      tip:
        "Сохраняй силы для продолжительного боя и действуй вместе с командой.",
      image: "../images/Boss_crystal.webp"
    }
  ];

  const cards = document.querySelectorAll(".raid-boss-card");

  const image = document.querySelector("#raidBossImage");
  const title = document.querySelector("#raidBossTitle");
  const rank = document.querySelector("#raidBossRank");
  const description = document.querySelector("#raidBossDescription");
  const tip = document.querySelector("#raidBossTip");
  const difficultyFill = document.querySelector("#raidDifficultyFill");
  const difficultyText = document.querySelector("#raidDifficultyText");

  if (
    !cards.length ||
    !image ||
    !title ||
    !rank ||
    !description ||
    !tip ||
    !difficultyFill ||
    !difficultyText
  ) {
    return;
  }

  function selectBoss(index) {
    const boss = bosses[index];

    if (!boss) return;

    cards.forEach((card, cardIndex) => {
      card.classList.toggle("active", cardIndex === index);
    });

    image.src = boss.image;
    image.alt = boss.name;
    title.textContent = boss.name;
    rank.textContent = boss.rank;
    description.textContent = boss.description;
    tip.textContent = boss.tip;

    difficultyFill.style.width = (boss.difficulty * 10) + "%";
    difficultyText.textContent = boss.difficulty + " / 10";
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.boss);
      selectBoss(index);
    });
  });

  selectBoss(0);
})();

