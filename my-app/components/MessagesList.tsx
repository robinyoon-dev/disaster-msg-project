"use client";
import { useEffect, useState } from "react";
import {MemoizedMessage} from "./Message";
import MsgInfo from "@/models/MsgInfo";
import { useInView } from "react-intersection-observer";
import getData from "@/app/actions";
import Skeleton from "./Skeleton";

interface MessagesListProps {
  initialMessages: MsgInfo[] | undefined;
}

const MessagesList = ({ initialMessages }: MessagesListProps) => {
  const [messages, setMessages] = useState(initialMessages);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  async function loadMoreMessages() {
    const next = page + 1;
    const data = await getData(next);
    const fetchedMessages = data.DisasterMsg[1].row;

    if (fetchedMessages?.length) {
      setPage(next);
      setMessages((prev: MsgInfo[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...fetchedMessages,
      ]);
    }
  }

  useEffect(() => {
    if (inView) {
      loadMoreMessages();
    }
  }, [inView]);

  return (
    <div>
      {messages?.map((message) => (
        <MemoizedMessage key={message.md101_sn} message={message} />
      ))}

      {/* Loading spinner */}
      <div ref={ref}>
        <Skeleton />
      </div>
    </div>
  );
};

export default MessagesList;
