function Timer (startTime, stoptTime, interval) {
    this.startTime = startTime;
    this.stoptTime = stoptTime;
    this.interval = interval;
}

Timer.prototype.start = function () {
    var d = new Date();
    this.startTime = d.getTime();
}

Timer.prototype.stop = function () {
    var d = new Date();
    this.startTime = d.getTime();
    this.interval = this.stoptTime - this.startTime;
    console.log(new Date(this.interval).toString);
}

let timer = new Timer(null, null, null);

const onClick = (event) => {
    debugger
    if (event.target.classList.contains("button_start")) {
        debugger
        timer.start();
    } else if (event.target.classList.contains("button_stop")) {
        debugger
        timer.stop();
    }
  }

  document.addEventListener("click", onClick);