import {test, testMap} from 'index';

class Main {
    constructor(title, firstName) {
        this.title = title;
        this.done = false;
        this.firstName = firstName;
    }

    static getFirstName() {
        return new Main('Sergey');
    }

    test() {
        this.done = true;
        console.log(`${this.title} done`);
    }
}

class Task extends Main {
    constructor() {
        super();
    }

    static age = 25;
    static year = 2019;

    complete(value){
        // просто экспериментировал с наследованием.
        super.test();
        return value;
    }

    static sum(a, b) {
        return a + b;
    }

    fu = () => ({firstName: 'Sergey', lastName: 'Saltykov', company: 'US'})
}

const main = new Main('Пробный класс');
const task = new Task();
const getName = Main.getFirstName();

main.test();
task.test();
task.complete(22);
console.log(getName.firstName);
console.log(Task.sum(4, 8));
task.fu();
console.log(Task.year);
console.log(Task.age);

test();
testMap();
