"use client";

const Skeleton = () => {
  return (
    <div
      role="status"
      className="animate-pulse p-2 mb-2 font-sans flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {/* emoji and keyword */}
      <div className=" flex-none basis-20 flex flex-col justify-center items-center md:h-auto md:w-48">
        <div className="rounded-full bg-gray-200 h-10 w-10"></div>

        <div className=" h-2.5 bg-gray-200"></div>
      </div>

      {/* description */}
      <div className="flex flex-col p-4">
        <div className="mb-3 ">
          <div
            className="
              block bg-gray-200 rounded-full px-3 py-1 mb-2 mr-2  w-48 md:inline-block
              dark:bg-gray-600
              "
          ></div>
        </div>

        <div className="mb-3 h-2 max-w-[480px] bg-gray-200 rounded"></div>
        <div className="mb-3 h-2 max-w-[480px] bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default Skeleton;
