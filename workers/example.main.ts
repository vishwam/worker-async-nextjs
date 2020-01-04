import { ExampleWorker } from './example.worker';
import promisify from 'worker-async';

export class Main {
    async log(str: string) {
        console.log(`LOG: ${str}`);
    }
}

export async function initWorker() {
    const worker = require('./example.worker.js')();
    const remote: ExampleWorker = promisify(worker, new Main());
    
    // now that it's initialized, make rpc-style calls:
    const increment = await remote.increment(42);
    console.log(`INCREMENT: ${increment}`);

    // iterate over async generators:
    for await (const num of remote.generator()) {
        console.log(`GENERATED ${num}`);
    }
}
