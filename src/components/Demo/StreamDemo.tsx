"use client";
import {
  useQuery,
  experimental_streamedQuery as streamedQuery,
} from "@tanstack/react-query";
import { StreamRPC } from "../../client/root"; // segmented client

const StreamDemo = () => {
  const { data } = useQuery({
    queryKey: StreamRPC.streamTokens.queryKey(),
    queryFn: streamedQuery({
      queryFn: () => StreamRPC.streamTokens(),
    }),
  });

  return (
    <div className="h-20">
      {data?.map((token, index) => (
        <span key={index}>{token.message}</span>
      ))}
    </div>
  );
};
export default StreamDemo;
