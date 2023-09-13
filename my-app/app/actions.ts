"use server"

import getData from "./getData";


export default async function fetchMessages(page?: number) {
  const data = await getData(page);

  // head
  // const head = data.DisasterMsg[0].head;
  // console.log(head);

  // row
  return data.DisasterMsg[1].row;
}

