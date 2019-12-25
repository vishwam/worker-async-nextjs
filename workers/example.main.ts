import { RemoteClass } from './example.worker';
import promisify from 'worker-async';

export class HostClass {
    constructor(private remote: RemoteClass) {
    }

    async log(str: string) {
        console.log(`LOG: ${str}`);
    }
}

export async function initWorker() {
    const worker = require('./example.worker')();
    const { host, remote } = await promisify<RemoteClass, HostClass>(worker, HostClass);
    return { worker, host, remote };
}
