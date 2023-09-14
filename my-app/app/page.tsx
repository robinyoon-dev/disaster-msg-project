import MessagesList from "@/components/MessagesList";
import Nav from "@/components/Nav";
import fetchMessages from "./actions";

export default async function Home() {
  const data = await fetchMessages(1);

  return (
    <div className=" pb-4 pl-4 pr-4 h-screen">
      <header className="sticky top-0 z-50 flex justify-between item-center p-4 bg-white/95 shadow">
        <h1 className="text-2xl font-bold  text-black md:text-3xl ">
          전국 재난 톡
        </h1>
        <Nav />
      </header>
      <main className="p-4 relative">
        <section>
          <MessagesList initialMessages={data} />
          {/* <MessagesList /> */}
        </section>
      </main>
    </div>
  );
}
