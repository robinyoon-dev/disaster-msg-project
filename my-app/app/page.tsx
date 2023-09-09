import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from "react";

import MessagesList from "@/components/MessagesList";
import fetchMessages from "./actions";

export default async function Home() {
  const data = await fetchMessages(1);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://github.com/robinyoon-dev/disaster-msg-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              alt="GitHub Logo"
              className={styles.githubLogo}
              width={24}
              height={24}
              priority
            />{" "}
            GitHub
          </a>
        </div>
      </div>

      <div className={styles.center}>

        {/* <Suspense fallback={<p>불러오는 중입니다...</p>}> */}
        <MessagesList initialMessages={data} />
        {/* </Suspense> */}
      </div>
    </main>
  );
}
