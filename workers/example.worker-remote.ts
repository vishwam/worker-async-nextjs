import { HostClass } from './example.worker-host';

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
