/**
 * Perform DB requests or call 3rd party APIs here
 */
export default class HelloService {
  /**
   * Return a greeting
   */
  static async getHello() {
    return { greeting: 'Hello world!' };
  }

  /**
   * Iterate over a stream of greetings
   */
  static async *getStreamingHello() {
    const string = 'Hello world! This message demonstrates real-time data handling capabilities of Vovk.ts.';
    for(const message of string.split(' ')) {
      yield { message: message + ' ' };
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
}