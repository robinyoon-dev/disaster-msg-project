"use client";
import { useEffect, useState } from "react";
import Message from "./Message";
import MsgInfo from "@/models/MsgInfo";
import fetchMessages from "@/app/actions";
interface MessagesListProps {
  initialMessages: MsgInfo[];
  //   children: React.ReactNode;
}

const MessagesList = ({ initialMessages }: MessagesListProps) => {
  const [messages, setMessages] = useState<MsgInfo[]>(initialMessages);
  const [page, setPage] = useState(1);
  

  async function loadMoreMessages() {
    const next = page + 1;
    const fetchedMessages = await fetchMessages(next);

    if(fetchMessages?.length){
      setPage(next);
      setMessages((prev)=>[...(prev?.length ? prev : []), ...fetchedMessages]);
    }

  }

 

  return (
    <div>
      <h3>메시지 목록</h3>
      {messages.map((message) => (
        <Message key={message.md101_sn} message={message} />
      ))}
    </div>
  );
};

export default MessagesList;
