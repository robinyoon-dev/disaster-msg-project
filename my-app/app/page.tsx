import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from "react";
import config from "@/config/serviceKey.config";

interface MsgInfo {
  create_date: string;
  location_id: string; //숫자로
  location_name: string;
  md101_sn: string; //숫자로
  msg: string;
  send_platform: string;
}

async function getData(serviceKey: string) {
  const url =
    "https://apis.data.go.kr/1741000/DisasterMsg3/getDisasterMsg1List";
  let pageNo = 1;
  let numOfRows = 10;

  const finalURL =
    url +
    `?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&type=json`;

  console.log("finalURL: " + finalURL);

  const res = await fetch(finalURL, {
    next: { revalidate: 10 },
  });

  const data = res.json();

  return data;
}

export default async function Home() {
  const serviceKey = config.serviceKey;

  const data = await getData(serviceKey);

  // head
  const head = data.DisasterMsg[0].head;
  console.log("---head---");
  console.log(head);

  const totalCount = head[0].totalCount;
  console.log("totalCount: " + totalCount);

  // row
  const row = data.DisasterMsg[1].row;

  const item1: MsgInfo = row[0];
  console.log(item1);

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
        <p></p>

        <Suspense fallback={<p>불러오는 중입니다...</p>}>
          {data && (
            <>
              <p>데이터가 들어왔어요</p>

              <p>전체 결과</p>
              <p>{totalCount}</p>
            </>
          )}
        </Suspense>
      </div>

      <div className={styles.grid}>
        {/* <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>
  );
}
