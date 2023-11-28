interface VariantObject {
   [keyof: number]: Element;
   ash: HTMLElement;
   nectar: HTMLElement;
   zenith: HTMLElement;
   chaos: HTMLElement;
   list(): HTMLElement[];
}

interface DOMObject {
   [keyof: string]: HTMLElement;
}

interface State {
   prominent: 0 | 1 | 2 | 3;
}

/**
 * Blueprint for the application.
 */
class App {
   // element handlers.
   dom = {
      body: document.body,
      backgrounds: {
         ash: document.querySelector(".bg-layer.ash")!,
         nectar: document.querySelector(".bg-layer.nectar")!,
         zenith: document.querySelector(".bg-layer.zenith")!,
         chaos: document.querySelector(".bg-layer.chaos")!,
      } satisfies DOMObject,
      controls: {
         container: document.querySelector(".controls")! as HTMLElement,
         back: document.querySelector(".back-button")!,
         forward: document.querySelector(".forward-button")!,
         previousIcon: document
            .querySelector(".back-button")!
            .querySelector("path")!,
         nextIcon: document
            .querySelector(".forward-button")!
            .querySelector("path")!,
      },
      variantContainers: {
         inner: document.querySelector(".variant-list")!,
         outer: document.querySelector(".variant-list-container")!,
      } satisfies DOMObject,
      variants: {
         get [0]() {
            return this.ash;
         },
         get [1]() {
            return this.nectar;
         },
         get [2]() {
            return this.zenith;
         },
         get [3]() {
            return this.chaos;
         },
         ash: document.querySelector("#ash")!,
         nectar: document.querySelector("#nectar")!,
         zenith: document.querySelector("#zenith")!,
         chaos: document.querySelector("#chaos")!,
         list() {
            return [this.ash, this.nectar, this.zenith, this.chaos];
         },
      } satisfies VariantObject,
   };
   /** The complete application state. */
   state = {
      prominent: 0,
   } as State;
   variantShift = 70;

   /** Starts the application. */
   run() {
      this.dom.controls.back.addEventListener(
         "click",
         this.previous.bind(this)
      );
      this.dom.controls.forward.addEventListener("click", this.next.bind(this));
      let aspectRatio = innerWidth / innerHeight;
      if (aspectRatio > 0.6 && aspectRatio < 0.8) {
         this.variantShift = 55;
      } else {
         this.variantShift = 70;
      }
      addEventListener("resize", () => {
         let aspectRatio = innerWidth / innerHeight;
         if (aspectRatio > 0.6 && aspectRatio < 0.8) {
            this.variantShift = 55;
         } else {
            this.variantShift = 70;
         }
      });

      //    // Handle resizing to permit actions only in lansdcape.

      //    /** Resizes other variants based on this. */
      //    const hoverAction = ((event: MouseEvent) => {
      //       let target = event.target as unknown as Element;
      //       this.dom.variants.list().forEach((variant) => {
      //          if (variant.contains(target)) {
      //             variant.style.width = "31vw";
      //          } else {
      //             variant.style.width = "23vw";
      //          }
      //       });
      //    }).bind(this);

      //    let aspectRatio = innerWidth / innerHeight;
      //    if (aspectRatio >= 0.8) {
      //       addEventListener("mouseover", hoverAction);
      //    } else {
      //       removeEventListener("mouseover", hoverAction);
      //    }
      //    addEventListener("resize", () => {
      //       let aspectRatio = innerWidth / innerHeight;
      //       if (aspectRatio >= 0.8) {
      //          addEventListener("mouseover", hoverAction);
      //       } else {
      //          removeEventListener("mouseover", hoverAction);
      //       }
      //    });
   }

   /** Goes back to the card before the prominent one, if it exists. */
   previous() {
      if (this.state.prominent !== 0) {
         this.state.prominent -= 1;
      }
      this.refresh();
   }
   /** Goes to the next card after the prominent one, if it exists. */
   next() {
      if (this.state.prominent !== 3) {
         this.state.prominent += 1;
      }
      this.refresh();
   }

   /** Recompute the UI. */
   refresh() {
      const { controls, variantContainers, variants, backgrounds } = this.dom;

      if (this.state.prominent === 0) {
         controls.previousIcon.style.setProperty("display", "none");
      } else if (this.state.prominent === 3) {
         controls.nextIcon.style.setProperty("display", "none");
      } else {
         const controls = this.dom.controls;
         controls.nextIcon.style.removeProperty("display");
         controls.previousIcon.style.removeProperty("display");
      }
      // Focus on selected variant.
      variants.list().forEach((variant, index) => {
         if (index === this.state.prominent) {
            variant.classList.add("prominent");
         } else {
            variant.classList.remove("prominent");
         }
      });
      // Shift variant list.
      variantContainers.inner.style.transform = `translateX(-${
         this.state.prominent * this.variantShift
      }vw)`;
      // Change background color.
      Object.values(backgrounds).forEach((background, index) => {
         if (index === this.state.prominent) {
            background.style.opacity = "1";
         } else {
            background.style.opacity = "0";
         }
      });
      controls.container.style.color = getComputedStyle(
         variants[this.state.prominent],
         null
      ).getPropertyValue("color");
   }
}

const app = new App();
app.run();
