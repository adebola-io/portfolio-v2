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
            if (name && name.startsWith(searchBar.value)) {
               card.style.display = "block";
            } else {
               card.style.display = "none";
            }
         }
      }
   });
}
