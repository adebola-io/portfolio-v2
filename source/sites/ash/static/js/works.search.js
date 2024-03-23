/** @type {HTMLInputElement} */ //@ts-ignore
const searchBar = document.querySelector(".search-bar");
const cards = document.querySelectorAll(".card");
if (searchBar) {
   searchBar.addEventListener("keyup", () => {
      for (let i = 0; i < cards.length; i++) {
         /** @type {HTMLElement} */ // @ts-ignore
         const card = cards[i];
         const cardName = card.querySelector(".work-name");
         if (cardName) {
            const name = cardName.textContent?.toLowerCase();
            /** @type {string[]} */
            const tags = [];
            for (const tag of card.querySelectorAll(".work-tag")) {
               tags.push((tag.textContent || "").toLowerCase());
            }
            const value = searchBar.value.toLowerCase();
            if (
               (name?.startsWith(value)) ||
               tags.some((tag) => tag.startsWith(value))
            ) {
               card.style.display = "block";
            } else {
               card.style.display = "none";
            }
         }
      }
   });
}

/** @type {NodeListOf<HTMLImageElement>} */
const images = document.querySelectorAll(".work-svg-icon");
images.forEach((image) => {
   image.addEventListener("load", () => {
      image.style.opacity = "1";
   });
   const wait = setInterval(() => {
      if (image.complete) {
         image.style.opacity = "1";
         clearInterval(wait);
      }
   }, 500);
});
