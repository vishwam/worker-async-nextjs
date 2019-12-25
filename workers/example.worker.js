// The entry point for the worker thread:
import { RemoteClass } from './example.worker-remote';
import promisify from 'worker-async';

promisify(self, RemoteClass).catch(err => {
    console.error(err);
});
