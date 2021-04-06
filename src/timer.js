class Timer {
  constructor() {
    this.currentTime = 100;
    this.intervalId = 0;
  }

  startCount(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime--;
      callback();
    }, 1000);
  }

  getMinutes() {
    let minutes = 0;
    minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = 0;
    seconds = this.currentTime % 60;
    return seconds;
  }

  twoDigitsNumber(num) {
    return ("0" + num).slice(-2);
  }

  stopCount() {
    if (this.currentTime >= 3600) {
      clearInterval(this.intervalId);
    }
  }

  resetCount() {
    this.currentTime = 0;
  }

  splitCount(minutes, seconds) {
    minutes = this.twoDigitsNumber(this.getMinutes());
    seconds = this.twoDigitsNumber(this.getSeconds());

    return `${minutes}:${seconds}`;
  }
}

//Loading Screen Timer animation
const ready = document.querySelector("#countdown-start");
const go = document.querySelector("#countdown-final");

function loadingAnimation() {
  setTimeout(function () {
    console.log(ready);
    console.log(go);
    ready.classList.remove("in");
    ready.classList.add("out");
  }, 1000);
  setTimeout(function () {
    go.classList.remove("out");
    go.classList.add("in");
  }, 3000);
  setTimeout(function () {
    go.classList.remove("in");
  }, 5000);
}
