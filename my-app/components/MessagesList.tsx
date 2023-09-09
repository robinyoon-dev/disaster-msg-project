"use client";

import Message from "./Message";
interface MessagesListProps {
//   children: React.ReactNode;
}

const MessagesList = () => {
  return <div>
    <h3>메시지 목록</h3>
    <Message/>
  </div>;
};

export default MessagesList;
