import { ExampleWorker } from './example.worker';
import promisify from 'worker-async';

export class Main {
    constructor(private remote: ExampleWorker) {
    }

    async log(str: string) {
        console.log(`LOG: ${str}`);
    }
}

export async function initWorker() {
    const worker = require('./example.worker')();
    const { host, remote } = await promisify<ExampleWorker, Main>(worker, Main);
    return { worker, host, remote };
}
