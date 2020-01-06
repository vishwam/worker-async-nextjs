import { ExampleWorker } from './example.worker';
import promisify from 'worker-async';

export class Main {
    async log(str: string) {
        console.log(`LOG: ${str}`);
    }
}

export async function initWorker() {
    const worker: Worker = require('./example.worker.js')();
    const { remote } = promisify<ExampleWorker>(worker, new Main());
    
    // now that it's initialized, make rpc-style calls:
    const increment = await remote.increment(42);
    console.log(`INCREMENT: ${increment}`);
    
    // iterate over async generators:
    for await (const num of remote.generator()) {
        console.log(`GENERATED ${num}`);
    }

    // make abortable request:
    const { remote: remoteCtrl, handler } = promisify<AbortController>(worker);
    try {
        // start the abortable request with a random stream id:
        const abortStream = handler.stream = Math.random();
        const promise = remote.abortableReq(abortStream);
        
        // abort the request:
        remoteCtrl.abort();

        console.log('isAborted? ', await promise);
    } finally {
        // stop listening to messages
        handler.stop();
    }
}
