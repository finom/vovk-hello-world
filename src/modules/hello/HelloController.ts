import { get, prefix } from "vovk";
import HelloService from "./HelloService";

/**
 * Handle requests and invoke service methods here
 */
@prefix('hello')
export default class HelloController {    
    /**
     * Return a greeting from the HelloService
     */
    @get('greeting')
    static async getHello() {
        return HelloService.getHello();
    }

    /**
     * Iterate over a stream of greetings from the HelloService
     */
    @get('streaming')
    static async *getStreamingHello() {
        yield* HelloService.getStreamingHello();
    }
}