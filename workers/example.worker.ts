// The entry point for the worker thread:
import promisify from 'worker-async';
import { Main } from './example.main';

export class ExampleWorker {
    constructor(private main: Main) {
    }

    async increment(num: number) {
        await this.main.log(`incrementing ${num}`);
        return num + 1;
    }

    async* generator() {
        for (let i = 0; i < 10; ++i) {
            yield i;
        }
    }
}

promisify(self as any, ExampleWorker).catch(err => {
    console.error(err);
});
