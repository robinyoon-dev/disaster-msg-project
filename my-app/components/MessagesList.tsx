"use client";

import Message from "./Message";
import MsgInfo from "@/models/MsgInfo";
interface MessagesListProps {
    row: MsgInfo[];
  //   children: React.ReactNode;
}

const MessagesList = ({ row }: MessagesListProps) => {
    // const [messages, setMessages] = useState<MsgInfo[]>([]);
  return (
    <div>
      <h3>메시지 목록</h3>
      {row.map((message) => (
        <Message key={message.md101_sn} message={message} />
      ))}
    </div>
  );
};

export default MessagesList;
