"use client";
import MsgInfo from "@/models/MsgInfo";
import getKeywords from "@/app/getKeywords";
import Image from "next/image";
import getEmoji from "@/app/getEmoji";

interface MessageProps {
  message: MsgInfo;
}

const Message = ({ message }: MessageProps) => {
  const hashtag = getKeywords(message.msg);
  const emoji = getEmoji(hashtag);
  return (
    <div className="p-2 mb-2 font-sans flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className=" flex flex-col justify-center items-center md:h-auto md:w-48">
        <Image src={emoji} alt={hashtag} width={80} height={80} priority />
        <p className="font-bold">{hashtag}</p>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {message.location_name}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {message.msg}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {message.create_date}
        </p>
      </div>
    </div>
  );
};

export default Message;
