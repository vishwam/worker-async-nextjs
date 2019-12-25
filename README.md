# worker-async-nextjs
An example app that demonstrates full-duplex promise-based communication between the browser's main thread and a web worker, using [worker-async](https://github.com/vishwam/worker-async#readme), [next.js](https://nextjs.org/), webpack, worker-loader, and typescript.

## Main changes from create-next-app
* `pages/index.js`: Entry point for the application. Calls `example.main.ts` below to initialize the worker and then makes remote RPC calls to the worker.
* `workers/example.main.ts`: Initializes the worker from the main thread.
* `workers/example.worker.ts`: Entry point for the worker thread.
* `tsconfig.json`: Add typescript support to next.js.
* `next.config.js`: Add web worker support to next.js.

## Getting started
### Development

Run `npm run dev` to start the application in watch mode. After opening the page, you should see console logs from index.js showing the RPC requests and responses.

### Production
Run `npm run build` and `npm start`
