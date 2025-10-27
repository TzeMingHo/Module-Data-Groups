const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here

function createSlideShow() {
  let currentImageIndex = 0;
  let image = document.getElementById("carousel-img");
  let auto = false;
  let intervalId;

  return {
    forward() {
      this.stop();
      currentImageIndex === images.length - 1
        ? (currentImageIndex = 0)
        : currentImageIndex++;
      image.src = images[currentImageIndex];
    },
    backwards() {
      this.stop();
      currentImageIndex === 0
        ? (currentImageIndex = images.length - 1)
        : currentImageIndex--;
      image.src = images[currentImageIndex];
    },
    autoForward() {
      intervalId = setInterval(() => {
        this.forward();
      }, 3000);
    },
    stop() {
      clearInterval(intervalId);
    },
  };
}

const slideShow = createSlideShow();

document.getElementById("stop-btn").addEventListener("click", () => {
  slideShow.stop();
});
document.getElementById("forward-btn").addEventListener("click", () => {
  slideShow.forward();
});
document.getElementById("backward-btn").addEventListener("click", () => {
  slideShow.backwards();
});
document.getElementById("auto-forward-btn").addEventListener("click", () => {
  slideShow.autoForward();
});
