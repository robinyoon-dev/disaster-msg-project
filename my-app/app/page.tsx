import Image from "next/image";
import styles from "./page.module.css";

import MessagesList from "@/components/MessagesList";
import fetchMessages from "./actions";

export default async function Home() {
  const data = await fetchMessages(1);

  return (
    <div className="max-w-3xl p-4">
      <header className="flex justify-around ">
        <h1 className="text-3xl font-bold">재난 메시지</h1>
        <a
          href="https://github.com/robinyoon-dev/disaster-msg-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />{" "}
          GitHub
        </a>
      </header>
      <main className="p-4">
        <section>
          <MessagesList initialMessages={data} />
        </section>
      </main>
    </div>
  );
}
