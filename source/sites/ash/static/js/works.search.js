/** @type {HTMLInputElement} */ //@ts-ignore
const searchBar = document.querySelector(".search-bar");
const cards = document.querySelectorAll(".card");
if (searchBar) {
   searchBar.addEventListener("keyup", () => {
      for (let i = 0; i < cards.length; i++) {
         /** @type {HTMLElement} */ // @ts-ignore
         const card = cards[i];
         let cardName = card.querySelector(".work-name");
         if (cardName) {
            let name = cardName.textContent?.toLowerCase();
            /** @type {string[]} */
            let tags = [];
            for (const tag of card.querySelectorAll(".work-tag")) {
               tags.push((tag.textContent || "").toLowerCase());
            }
            let value = searchBar.value.toLowerCase();
            if (
               (name && name.startsWith(value)) ||
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
   let wait = setInterval(() => {
      if (image.complete) {
         image.style.opacity = "1";
         clearInterval(wait);
      }
   }, 500);
});
