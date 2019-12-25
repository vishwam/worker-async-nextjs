// entry point for the worker thread
// @zeit/next-workers@1.0.0 only looks for files ending with ".worker.js", 
// so our actual .ts entrypoint is not picked up. Remove this file once
// https://github.com/zeit/next-plugins/issues/585 is resolved
import './example.worker.ts';
