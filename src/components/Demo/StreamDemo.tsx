"use client";
import { StreamRPC } from "../../client/root"; // segmented client

const StreamDemo = () => {
  const { data } = StreamRPC.streamTokens.useQuery();
  return (
    <div className="h-20">
      {data?.map((token, index) => (
        <span key={index}>{token.message}</span>
      ))}
    </div>
  );
};
export default StreamDemo;
