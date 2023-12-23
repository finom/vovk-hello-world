import { get, prefix } from "vovk";
import HelloService from "./HelloService"

@prefix('hello')
export default class HelloController {
    static controllerName = 'HelloController';
    
    private static helloService = HelloService;

    /**
     * Return a greeting from the HelloService
     */
    @get('greeting')
    static getHello() {
        return this.helloService.getHello();
    }
}