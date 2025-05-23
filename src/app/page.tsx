import UserForm from "@/components/UserForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={160}
            height={38}
            priority
          />
          <span className="text-4xl">+</span>
          <Image
            className="dark:invert"
            src="https://vovk.dev/vovk-logo.svg"
            alt="Vovk.ts logo"
            width={160}
            height={38}
            priority
          />
        </div>

        <div
          className={`
          w-96
          font-[family-name:var(--font-geist-mono)]
          text-sm

          [&_form_>_div]:w-full 
          [&_form_>_div]:grid 
          [&_form_>_div]:justify-items-stretch 
          [&_form_>_div]:grid-cols-2 
          [&_form_>_div]:my-2 

          [&_h3]:font-bold

          [&_label]:flex
          [&_label]:text-sm
          [&_label]:items-center 
          
          [&_input]:text-sm
          [&_input]:p-1.5 
          [&_input]:border
          [&_input]:border-gray-100
          [&_input]:outline-none 
          [&_input]:rounded-sm 
          dark:[&_input]:border-none 
          dark:[&_input]:text-black 

          [&_select]:text-sm
          [&_select]:p-1.5 
          [&_select]:border
          [&_select]:border-gray-100
          [&_select]:outline-none 
          [&_select]:rounded-sm 
          dark:[&_select]:border-none 
          dark:[&_select]:text-black 

          [&_[type="checkbox"]]:mr-2

          [&_button]:rounded-full 
          [&_button]:border border-solid 
          [&_button]:border-transparent 
          [&_button]:transition-colors 
          [&_button]:flex 
          [&_button]:items-center 
          [&_button]:justify-center 
          [&_button]:bg-foreground 
          [&_button]:text-background 
          [&_button]:hover:bg-[#383838] 
          [&_button]:dark:hover:bg-[#ccc] 
          [&_button]:text-sm 
          [&_button]:sm:text-base 
          [&_button]:h-10 
          [&_button]:sm:h-12 
          [&_button]:px-6
          [&_button]:sm:px-10
          [&_button]:mx-auto
          [&_button]:mt-8

          [&_output]:max-w-full
          [&_output]:block
          [&_output_div]:max-w-full
          [&_output_div]:overflow-auto
          [&_output_div]:relative
        `}
        >
          <h2 className="text-lg font-bold mb-4 text-center">
            &quot;Update user&quot; demo
          </h2>
          <p className="text-sm mb-4 text-center">
            (form validation isn&apos;t enabled)
          </p>
          <UserForm />
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
