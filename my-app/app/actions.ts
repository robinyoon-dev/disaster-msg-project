"use server";

import config from "@/config/serviceKey.config";

export default async function fetchMessages(page: number) {
  const data = await getData(page);

  // head
  // const head = data.DisasterMsg[0].head;
  // console.log(head);

  // row
  return data.DisasterMsg[1].row;
}

async function getData(page: number) {
  const serviceKey = config.serviceKey;
  const url =
    "https://apis.data.go.kr/1741000/DisasterMsg3/getDisasterMsg1List";
  let numOfRows = 5;

  const finalURL =
    url +
    `?serviceKey=${serviceKey}&pageNo=${page}&numOfRows=${numOfRows}&type=json`;

  const res = await fetch(finalURL, { cache: "no-store" });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  // const res = await fetch(finalURL, {
  //   next: { revalidate: 60 },
  // });
  const data = res.json();

  return data;
}
