"use client";

const Skeleton = () => {
  return (
    <div
      role="status"
      className="animate-pulse p-2 mb-2 font-sans flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {/* emoji and keyword */}
      <div className=" flex-none basis-20 flex flex-col justify-center items-center md:h-auto md:w-48">
        <div className="rounded-full bg-gray-200 h-16 w-16 dark:bg-gray-700 "></div>

        <div className=" h-4 w-10 bg-gray-200 rounded-full mt-4 dark:bg-gray-700  "></div>
      </div>

      {/* description */}
      <div className="flex flex-col p-4 w-full ">
        <div className="mb-3 ">
          <div
            className="
              block bg-gray-200 rounded-full px-3 py-1 mb-2 mr-2 h-6 w-32 md:inline-block
              dark:bg-gray-700 
              "
          ></div>
        </div>

        <div className="mb-3 h-4 w-full bg-gray-200 dark:bg-gray-700  rounded-full"></div>
        <div className="mb-3 h-4 w-full bg-gray-200 dark:bg-gray-700  rounded-full"></div>
        <div className="mb-3 h-4 w-full bg-gray-200 dark:bg-gray-700  rounded-full"></div>

        <div className="mb-3 h-4 w-48  bg-gray-200 dark:bg-gray-700  rounded-full"></div>
      </div>
    </div>
  );
};

export default Skeleton;
