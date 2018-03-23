class Timer {
    constructor(startTime, stopTime, interval) {
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.interval = interval;
    }

    start() {
        var d = new Date();
        this.startTime = d.getTime();
    }

    stop() {
        var d = new Date();
        this.stopTime = d.getTime();
        this.interval = this.stopTime - this.startTime;
        console.log(this.interval);
    }

    getTime() {
        console.log(interval)
    }

    static timeToNY() {
        var d = new Date();
        var ny = new Date("December 31 2018 23:59")
        return (ny.getTime() - d.getTime())/86400000;
    }
 }


 let timer1 = new Timer(333, 222, 111);
 let timer2 = new Timer(444, 333, 111);
 let timer3 = new Timer(555, 444, 111);


 let stopwatch = new Timer(null, null, null);


const onClick = (event) => {
    if (event.target.classList.contains("button_start")) {
        stopwatch.start();
    } else if (event.target.classList.contains("button_stop")) {
        stopwatch.stop();
    }
  }

  document.addEventListener("click", onClick);

  console.log(`До нового года осталось ${Math.floor(Timer.timeToNY())}дней`);
