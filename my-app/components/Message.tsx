"use client";
import MsgInfo from "@/models/MsgInfo";
interface MessageProps {
  //   children: React.ReactNode;
  message: MsgInfo;
}

const Message = ({ message }: MessageProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div>{message.create_date}</div>
      <div>{message.location_name}</div>
      <div>{message.md101_sn}</div>
      <p className="text-gray-700 text-base">{message.msg}</p>
    </div>
  );
};

export default Message;
