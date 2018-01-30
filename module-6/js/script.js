const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: '',
    setCharCount () {
        let int;
        while(!this.charCount) {
            int = prompt("insert count of symbhols","");
            if (this.checkPositiveInteger(int)) this.charCount = int;
        }
    },
    checkPositiveInteger (int) {
        if (int - Math.floor(int) == 0 && int > 0 && isNaN(int) === false){
          return true;
        } else { 
            return false;
        }
    },
    task: '',
    createTask () {
        for(i =0; i < this.charCount; i++) {
            this.task += this.chars[Math.floor(Math.random()*this.chars.length)];
        }
    },
    startTask () {
        this.userInput = prompt(`please insert "${this.task}"`, "");
        for(i =0; i < this.charCount; i++) {
            if (this.task.charAt(i) != this.userInput.charAt(i)) this.userErrors++ ;
        }   
        alert(this.userErrors == 0 ? "Congradilation, you have not mistakes" : `you have ${this.userErrors} mistakes`)
    },
    userInput: '',
    compareCountOfErrors() {

    },
    userErrors: ''

};

function run() {
    keyTrainer.setCharCount();
    keyTrainer.createTask();
    keyTrainer.startTask();
}

run();

