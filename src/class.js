import {test, testMap} from 'index';

class Main {
    constructor(title) {
        this.title = title;
        this.done = false;
    }

    test() {
        this.done = true;
        console.log(`${this.title} done`);
    }
}

class Task extends Main {
    constructor(title) {
        super(title);
    }

    complete(value){
        super.test();
        return value;
    }
}

const main = new Main('Пробный класс');
const task = new Task();

main.test();
task.test();
task.complete(22);

test();
testMap();
