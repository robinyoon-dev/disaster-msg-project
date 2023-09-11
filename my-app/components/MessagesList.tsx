"use client";
import { useEffect, useState } from "react";
import Message from "./Message";
import MsgInfo from "@/models/MsgInfo";
import fetchMessages from "@/app/actions";
import { useInView } from "react-intersection-observer";
interface MessagesListProps {
  initialMessages: MsgInfo[];
  //   children: React.ReactNode;
}

const MessagesList = ({ initialMessages }: MessagesListProps) => {
  const [messages, setMessages] = useState<MsgInfo[]>(initialMessages);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  async function loadMoreMessages() {
    const next = page + 1;
    const fetchedMessages = await fetchMessages(next);

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
      {messages.map((message) => (
        <Message key={message.md101_sn} message={message} />
      ))}

      {/* Loading spinner */}
      <div ref={ref}>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default MessagesList;
