const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here

function createSlideShow() {
  let currentImageIndex = 0;
  let image = document.getElementById("carousel-img");
  let intervalId;
  let stopButton = document.getElementById("stop");
  stopButton.style.display = "none";
  let secondsInput = document.getElementById("auto-seconds");
  let second;

  return {
    forward() {
      currentImageIndex === images.length - 1
        ? (currentImageIndex = 0)
        : currentImageIndex++;
      image.src = images[currentImageIndex];
    },
    backwards() {
      currentImageIndex === 0
        ? (currentImageIndex = images.length - 1)
        : currentImageIndex--;
      image.src = images[currentImageIndex];
    },
    autoForward() {
      this.stop();
      this.getSecondValue();
      if (second >= 1) {
        intervalId = setInterval(() => {
          this.forward();
        }, second * 1000);
      }
      secondsInput.style.display = "none";
      stopButton.style.display = "block";
    },
    stop() {
      clearInterval(intervalId);
      secondsInput.style.display = "block";
      stopButton.style.display = "none";
    },
    autoBackward() {
      this.stop();
      this.getSecondValue();
      if (second >= 1) {
        intervalId = setInterval(() => {
          this.backwards();
        }, second * 1000);
      }
      secondsInput.style.display = "none";
      stopButton.style.display = "block";
    },
    getSecondValue() {
      second = document.getElementById("auto-seconds").value;
    },
  };
}

const slideShow = createSlideShow();

document.getElementById("forward-btn").addEventListener("click", () => {
  slideShow.forward();
});
document.getElementById("backward-btn").addEventListener("click", () => {
  slideShow.backwards();
});
document.getElementById("auto-forward").addEventListener("click", () => {
  slideShow.autoForward();
});
document.getElementById("stop").addEventListener("click", () => {
  slideShow.stop();
});
document.getElementById("auto-backward").addEventListener("click", () => {
  slideShow.autoBackward();
});
