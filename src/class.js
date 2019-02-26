import {foo} from 'src/index';

class Task {

    async getJsonData() {
        const data = foo();

        return data
            .then(({data}) => console.log(data))
            .catch(() => console.log('Error'));
    }

    async getList() {
        const test = await foo();
        console.log(test.data);
        return test.data;
    }

    async getList() {
        const test = await foo();
        console.log(test.data);
        return test.data;
    }

    async testTryChatch() {
        try {
            const test = await foo();
                await qwerty();
            console.log(test.data);
        } catch (e) {
            console.error('error');
        }
    }
}

(async() => {
   console.log(await foo());
})();

const task = new Task();

task.getList();
task.testTryChatch();
task.getJsonData();
