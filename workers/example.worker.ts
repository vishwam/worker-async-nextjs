// The entry point for the worker thread:
import promisify from 'worker-async';
import { HostClass } from './example.main';

export class RemoteClass {
    constructor(private host: HostClass) {
    }

    async increment(num: number) {
        await this.host.log(`incrementing ${num}`);
        return num + 1;
    }

    async* generator() {
        for (let i = 0; i < 10; ++i) {
            yield i;
        }
    }
}

promisify(self as any, RemoteClass).catch(err => {
    console.error(err);
});
