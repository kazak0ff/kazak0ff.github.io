function Timer(startTime, stoptTime, interval) {
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
    console.log(this.interval);
}

let timer = new Timer(null, null, null);

const onClick = (event) => {
    if (event.target.classList.contains("button_start")) {
        timer.start();
    } else if (event.target.classList.contains("button_stop")) {
        timer.stop();
    }
}

document.addEventListener("click", onClick);