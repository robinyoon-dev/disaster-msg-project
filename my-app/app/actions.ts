'use server'

import config from "@/config/serviceKey.config";


export default async function fetchMessages() {
  const data = await getData();

  // head
  // const head = data.DisasterMsg[0].head;
  // console.log(head);

  // row
  return data.DisasterMsg[1].row;
}




async function getData() {
  const serviceKey = config.serviceKey;
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