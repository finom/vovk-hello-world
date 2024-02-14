import { worker } from 'vovk/worker'

/**
 * Run heavy calculations here
 */
@worker()
export default class HelloWorkerService {
  /**
   * Calculate fibonacci number and yield result every n iterations
   * @param num - total number of iterations
   * @param iterationsToYield - number of iterations to yield
  */
  static *fibonacci(num: bigint, iterationsToYield: bigint) {
    let a = 1n;
    let b = 0n;
    let i = 0n;
    while (num > i++) {
      [a, b] = [a + b, a];
      if(i % iterationsToYield === 0n) {
        yield { iteration: i, value: a };
      }
    }
  }
}
