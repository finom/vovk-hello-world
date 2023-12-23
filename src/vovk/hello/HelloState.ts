import { type DefaultFetcherOptions, clientizeController } from "vovk/client";
import { promisifyWorker } from "vovk/worker";
import { getUse } from "use-0";
import type HelloWorkerService from "./HelloWorkerService";
import type HelloController from "./HelloController";
import metadata from "../metadata";

export default class HelloState {
    private static worker = typeof Worker !== 'undefined' ? promisifyWorker<typeof HelloWorkerService>(
        new Worker(new URL('./HelloWorkerService.ts', import.meta.url)), 
        metadata.workers.HelloWorkerService
    ) : null;

    private static controller = clientizeController<typeof HelloController, DefaultFetcherOptions>(metadata.HelloController, {
        defaultOptions: {
            prefix: '/api',
        }
    });

    static use = getUse<typeof HelloState>();

    static pi = 3;

    static getHello() {
        return this.controller.getHello();
    }

    static async calculatePi() {
        for await (const pi of this.worker?.calculatePi(100_000_000_000, 10_000_000) ?? []) {
            this.pi = pi;
        }
    }
}