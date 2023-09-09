"use client";
import { useState } from "react";
import Message from "./Message";
import MsgInfo from "@/models/MsgInfo";
import fetchMessages from "@/app/actions";
import InfiniteScroll from "react-infinite-scroll-component";

interface MessagesListProps {
  initialMessages: MsgInfo[];
  //   children: React.ReactNode;
}

const MessagesList = ({ initialMessages }: MessagesListProps) => {
  const [messages, setMessages] = useState<MsgInfo[]>(initialMessages);
  const [page, setPage] = useState(1);

  async function loadMoreMessages() {
    console.log("Next!");

    const next = page + 1;
    const fetchedMessages = await fetchMessages(next);

    if (fetchMessages?.length) {
      setPage(next);
      setMessages((prev) => [...prev, ...fetchedMessages]);
    }
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={messages.length}
        next={loadMoreMessages}
        style={{ display: "flex", flexDirection: "column" }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        // scrollThreshold={0.5}
        height={500}
      >
        {messages.map((message) => (
          <div
            key={message.md101_sn}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <div>{message.create_date}</div>
            <div>{message.location_name}</div>
            <div>{message.md101_sn}</div>
            <p className="text-gray-700 text-base">{message.msg}</p>
          </div>
        ))}

        {/* {messages.map((message) => (
          <Message key={message.md101_sn} message={message} />
        ))} */}
      </InfiniteScroll>
    </div>
  );
};

export default MessagesList;
