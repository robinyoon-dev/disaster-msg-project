"use client";
import MsgInfo from "@/models/MsgInfo";
interface MessageProps {
  //   children: React.ReactNode;
  message: MsgInfo;
}

const Message = ({ message }: MessageProps) => {
  return (
    <div>
      <div>{message.create_date}</div>
      <div>{message.location_name}</div>
      <div>{message.md101_sn}</div>
      <div>{message.msg}</div>
    </div>
  );
};

export default Message;
