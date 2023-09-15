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
      {/* emoji and keyword */}
      <div className=" flex flex-col justify-center items-center md:h-auto md:w-48">
        <Image
          className="dark:invert"
          src={emoji}
          alt={hashtag}
          width={70}
          height={70}
          priority
        />

        <p className="font-bold text-lg text-center dark:text-gray-300">
          {hashtag}
        </p>
      </div>

      {/* description */}
      <div className="flex flex-col p-4 leading-normal justify-between items-center md:items-start">
        <div className="mb-3 ">
          {locationArray.map((location) => (
            <div
              key={location}
              className="
              block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 mr-2 md:inline-block
              dark:text-gray-300
              dark:bg-gray-600
              "
            >
              {location}
            </div>
          ))}
        </div>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
          {message.msg}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
          {message.create_date}
        </p>
      </div>
    </div>
  );
};

export default Message;
