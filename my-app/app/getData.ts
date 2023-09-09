
import config from "@/config/serviceKey.config";

export default async function getData() {
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
