
const searchInput = document.querySelector("#siteSearchInput");
const searchResults = document.querySelector("#siteSearchResults");

if (searchInput && searchResults) {

    function searchSite() {
        const query = searchInput.value.trim().toLowerCase();

        searchResults.innerHTML = "";

        if (!query) {
            searchResults.classList.remove("active");
            return;
        }

        const matches = searchData.filter(item =>
            `${item.title} ${item.category} ${item.description}`
                .toLowerCase()
                .includes(query)
        );

        if (matches.length === 0) {
            searchResults.innerHTML =
                '<div class="search-empty">Ничего не найдено</div>';
        } else {
            matches.forEach(item => {
                const result = document.createElement("div");
                result.className = "search-result";

                const title = document.createElement("strong");
                title.textContent = item.title;

                const info = document.createElement("span");
                info.textContent = item.category;

                result.append(title, info);

                result.addEventListener("click", () => {
                    const targetUrl = new URL(item.url, window.location.href);

                    searchResults.classList.remove("active");
                    searchInput.value = "";

                    if (
                        targetUrl.pathname === window.location.pathname &&
                        targetUrl.hash
                    ) {
                        const id = decodeURIComponent(
                            targetUrl.hash.slice(1)
                        );

                        if (typeof openCharacterById === "function") {
                            openCharacterById(id);
                        } else {
                            window.location.hash = id;
                        }
                    } else {
                        window.location.href = targetUrl.href;
                    }
                });

                searchResults.appendChild(result);
            });
        }

        searchResults.classList.add("active");
    }

    searchInput.addEventListener("input", searchSite);
}

window.addEventListener("load", () => {
    const id = decodeURIComponent(
        window.location.hash.slice(1)
    );

    if (!id) return;

    if (typeof openCharacterById === "function") {
        openCharacterById(id);
    } else {
        const target = document.querySelector("#id");

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            target.classList.add("search-highlight");

            setTimeout(() => {
                target.classList.remove("search-highlight");
            }, 3000);
        }
    }
});

window.addEventListener("load", () => {
    const id = decodeURIComponent(
        window.location.hash.slice(1)
    );

    if (!id) return;

    if (typeof openWeaponById === "function") {
        openWeaponById(id);
    } else {
        const target = document.querySelector("#id");

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            target.classList.add("search-highlight");

            setTimeout(() => {
                target.classList.remove("search-highlight");
            }, 3000);
        }
    }
});

window.addEventListener("load", () => {
    const id = decodeURIComponent(
        window.location.hash.slice(1)
    );

    if (!id) return;

    if (typeof openEnchantById === "function") {
        openEnchantById(id);
    } else {
        const target = document.querySelector("#id");

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            target.classList.add("search-highlight");

            setTimeout(() => {
                target.classList.remove("search-highlight");
            }, 3000);
        }
    }
});

