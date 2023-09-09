import Image from "next/image";
import styles from "./page.module.css";
import { Suspense, useState } from "react";
import config from "@/config/serviceKey.config";
import { DOMParser } from "xmldom";
import MessagesList from "@/components/MessagesList";

interface MisfortuneSituationNoticeMsgInfo {
  msg_id: string; //메세지 ID
  msg_seq: number; //메시지번호
  clmy_pttn_cd: string; //재난유형분류명
  clmy_pttn_nm: string; //재난유형명
  titl: string; //메시지제목
  cnts1: string; //메시지내용 //xmlString
  inpt_date: string; //수신일시
}

interface MsgInfo {
  create_date: string;
  location_id: string;
  location_name: string;
  md101_sn: string;
  msg: string;
  send_platform: string;
}

// async function getMisfortuneSituationNoticeMsgData(serviceKey: string) {
//   const url =
//     "http://apis.data.go.kr/1741000/MisfortuneSituationNoticeMsg3/getMisfortuneSituationNoticeMsg1List";
//   let pageNo = 1;
//   let numOfRows = 5;

//   const finalURL =
//     url +
//     `?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&type=json`;

//   const res = await fetch(finalURL, {
//     next: { revalidate: 30 },
//   });

//   const data = res.json();

//   return data;
// }

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

  const data = await getData(serviceKey!);

  // const misfortuneData = await getMisfortuneSituationNoticeMsgData(serviceKey!);

  // head
  // const misfortune_head = misfortuneData.MisfortuneSituationNoticeMsg[0].head;

  // row
  // const misfortune_row = misfortuneData.MisfortuneSituationNoticeMsg[1].row;
  // const misfortune_item1: MisfortuneSituationNoticeMsgInfo = misfortune_row[0];
  // console.log(misfortune_item1);

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
        

        <Suspense fallback={<p>불러오는 중입니다...</p>}>
          {data && <MessagesList />}
        </Suspense>
      </div>
    </main>
  );
}
