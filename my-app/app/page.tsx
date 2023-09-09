import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from "react";
import config from "@/config/serviceKey.config";
import MessagesList from "@/components/MessagesList";

async function getData(serviceKey: string) {
  const url =
    "https://apis.data.go.kr/1741000/DisasterMsg3/getDisasterMsg1List";
  let pageNo = 1;
  let numOfRows = 10;

  const finalURL =
    url +
    `?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&type=json`;

  const res = await fetch(finalURL, {
    next: { revalidate: 10 },
  });

  const data = res.json();

  return data;
}

export default async function Home() {
  const serviceKey = config.serviceKey;

  const data = await getData(serviceKey!);

  // head
  // const head = data.DisasterMsg[0].head;
  // console.log(head);

  // row
  const row = data.DisasterMsg[1].row;

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
        <h1>오늘의 재난 문자 발송</h1>

        <Suspense fallback={<p>불러오는 중입니다...</p>}>
          {row && <MessagesList row={row} />}
        </Suspense>
      </div>
    </main>
  );
}
