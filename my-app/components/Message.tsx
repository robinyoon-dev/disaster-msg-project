"use client";
import MsgInfo from "@/models/MsgInfo";
import getKeywords from "@/app/getKeywords";
import Image from "next/image";
import getEmoji from "@/app/getEmoji";
import getLocationArray from "@/app/getLocationArray";
interface MessageProps {
  message: MsgInfo;
}

const Message = ({ message }: MessageProps) => {
  const hashtag = getKeywords(message.msg);
  const emoji = getEmoji(hashtag);
  const locationArray = getLocationArray(message.location_name);

  return (
    <div className="p-2 mb-2 font-sans flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className=" flex flex-col justify-center items-center md:h-auto md:w-48">
        <Image src={emoji} alt={hashtag} width={70} height={70} priority />

        <p className="font-bold text-lg">{hashtag}</p>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="mb-3">
          {locationArray.map((location) => (
            <div
              key={location}
              className="
              inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2
              "
            >
              {location}
            </div>
          ))}
        </div>

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
