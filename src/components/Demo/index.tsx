"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StreamDemo from "./StreamDemo";
import UserFormDemo from "./UserFormDemo";

const queryClient = new QueryClient();

const Demo = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StreamDemo />
      <h2 className="text-lg font-bold mb-1 text-center">
        &quot;Update user&quot; demo
      </h2>
      <p className="text-xs mb-4 text-center">
        <strong>*</strong> form validation isn&apos;t enabled for demo purposes
      </p>
      <UserFormDemo />
    </QueryClientProvider>
  );
};

export default Demo;
