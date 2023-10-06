import MessagesList from "@/components/MessagesList";
import Nav from "@/components/Nav";
import getData from "./actions";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";

export default async function Home() {
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

        <ScrollToTopBtn />
      </main>
    </div>
  );
}
