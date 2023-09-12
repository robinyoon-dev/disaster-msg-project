"use client";
import MsgInfo from "@/models/MsgInfo";
import getKeywords from "@/app/getKeywords";

interface MessageProps {
  message: MsgInfo;
}

const Message = ({ message }: MessageProps) => {
  const hashtag = getKeywords(message.msg);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {hashtag}
      </span>
      <div>{message.location_name}</div>
      <p className="text-gray-700 text-base">{message.msg}</p>

      <div>{message.create_date}</div>
    </div>
  );
};

export default Message;
