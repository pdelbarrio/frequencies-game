class Timer {
  constructor() {
    this.currentTime = 10;
    this.intervalId = 0;
  }

  startCount(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime--;
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
