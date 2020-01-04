// The entry point for the worker thread:
import promisify from 'worker-async';
import { Main } from './example.main';

export class ExampleWorker {
    async increment(num: number) {
        await main.log(`incrementing ${num}`);
        return num + 1;
    }

    async* generator() {
        for (let i = 0; i < 10; ++i) {
            yield i;
        }
    }
}

const main: Main = promisify(self as any, new ExampleWorker());
