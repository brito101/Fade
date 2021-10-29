class Fade {
  constructor(items, delay) {
    this.items = items;
    this.delay = delay || 50;
  }

  fadeIn(el) {
    let opactiy = 0;
    const timer = setInterval(() => {
      if (opactiy < 1) {
        el.style.opacity = opactiy;
        opactiy += 0.1;
      } else {
        clearInterval(timer);
      }
    }, this.delay);
  }

  checkFades() {
    this.items.forEach((el) => {
      const wHeight = parseInt(0.75 * window.innerHeight, 10);
      if (wHeight >= el.getBoundingClientRect().top) {
        if (el.style.opacity === "0") {
          this.fadeIn(el);
        }
      }
    });
  }

   init() {
    if (this.items.length) {
      this.items.forEach((el) => {
        el.style.opacity = 0;
      });
      this.checkFades();
    }
  }
}
