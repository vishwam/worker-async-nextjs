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

    async abortableReq(abortStream: number) {
        const ctrl = new AbortController();
        const { handler } = promisify(worker, ctrl);
        handler.stream = abortStream;
        try {
            // wait for host thread to abort:
            await new Promise(r => setTimeout(r, 1000));
            return ctrl.signal.aborted;
        } finally {
            handler.stop();
        }
    }
}

const worker: Worker = self as any;
const { remote: main } = promisify<Main>(worker, new ExampleWorker());
