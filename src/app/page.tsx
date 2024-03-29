"use client";
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { HelloController, HelloWorkerService } from 'vovk-client';
import type { VovkClientReturnType, VovkYieldType } from 'vovk';

export default function Home() {
  const [serverResponse, setServerResponse] = useState<VovkClientReturnType<typeof HelloController.getHello>>();
  const [streamingHello, setStreamingHello] = useState('');
  const [workerResult, setWorkerResult] = useState<VovkYieldType<typeof HelloWorkerService.fibonacci>>({
    iteration: 0n,
    value: 0n,
  });
  const isRun = useRef(false);

  const callGetHello = useCallback(async () => {
    setServerResponse(await HelloController.getHello());
  }, []);

  const callGetStreamingHello = useCallback(async () => {
    for await (const { message } of await HelloController.getStreamingHello()) {
      setStreamingHello(v => v + message);
    }
  }, []);

  const callCalculatePi = useCallback(async () => {

    HelloWorkerService.use(
      new Worker(new URL('../modules/hello/HelloWorkerService.ts', import.meta.url))
    );

    for await (const result of HelloWorkerService.fibonacci(1000_000_000_000n, 100_000n)) {
      setWorkerResult(result);
    }
  }, []);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true; // avoid double run in dev mode
    callGetHello();
    callGetStreamingHello();
    callCalculatePi();
  }, [callCalculatePi, callGetHello, callGetStreamingHello]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-6 dark:bg-slate-900 dark:text-white bg-white">
      <div className="z-10 max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 py-4 dark:border-neutral-800 dark:bg-slate-900 lg:static lg:w-auto  lg:rounded-xl lg:border bg-white lg:bg-gray-200 p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
          &nbsp;and&nbsp;
          <code className="font-mono font-bold">src/modules/hello/*.ts</code>
        </p>
      </div>

      <div className="mt-32 relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:lg:h-[360px]">
        <Image
          className="relative dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <p className="opacity-70 mb-2 mt-3 text-xl font-extrabold">+</p>
        <Image
          className="relative dark:invert"
          src="/vovk-text-logo.png"
          alt="Vovk.ts"
          width={120}
          height={40}
          priority
        />
        
      </div>
      <div className='flex flex-col text-left max-w-full lg:w-[700px] m-auto mt-12'>
          <div className='flex gap-2 flex-1 flex-col items-center mb-4'>
            <div className="">Simple HTTP response:</div>
            <div className="font-bold">{serverResponse?.greeting ?? 'Loading...'}</div>
          </div>
          <div className='flex gap-2 flex-1 flex-col items-center mb-4'>
            <div className="">Heavy calculations by a Worker Service & BigInt:</div>
            <div className="font-bold">{workerResult?.iteration.toString()}th fibonacci number has {workerResult?.value.toString().length} digits</div>
          </div>
          <div className='flex gap-2 flex-1 flex-col items-center max-w-96 mx-auto'>
            <div className="">Streaming HTTP response:</div>
            <div className="font-bold min-h-40">{streamingHello}</div>
          </div>
        </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Next.js Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn Next.js{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vovk.dev"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Vovk Website{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Check the core points of Vovk.ts library and its features.
          </p>
        </a>

        <a
          href="https://docs.vovk.dev"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Vovk Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn Vovk.ts in a step-by-step guide with code samples.
          </p>
        </a>
      </div>
    </main>
  )
}
