import MessagesList from "@/components/MessagesList";
import Nav from "@/components/Nav";
import getData from "./actions";

export default async function Home() {
  process.env.__NEXT_PRIVATE_PREBUNDLED_REACT = "experimental";
  const data = await getData(1);
  const initialMessages = data.DisasterMsg[1].row;

  return (
    <div className=" pb-4 pl-4 pr-4 h-screen">
      <header className="sticky top-0 z-50 flex justify-between item-center p-4 bg-white/95 dark:bg-gray-900/90 shadow">
        <h1 className="text-2xl font-bold  text-black dark:text-gray-300 md:text-3xl ">
          전국 재난 톡
        </h1>
        <Nav />
      </header>
      <main className="p-4 relative">
        <section>
          <MessagesList initialMessages={initialMessages} />
        </section>

        {/* hidden  */}
        <button className="fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-gray-600 hover:bg-gray-700 text-white text-lg font-semibold transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
          </svg>
          <span className="sr-only">Go to top</span>
        </button>
      </main>
    </div>
  );
}
