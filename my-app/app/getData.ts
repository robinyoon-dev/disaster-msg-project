import config from "@/config/serviceKey.config";

export default async function getData(page: number) {
    const serviceKey = config.serviceKey;
    const url =
      "https://apis.data.go.kr/1741000/DisasterMsg3/getDisasterMsg1List";
    let numOfRows = 5;
  
    const finalURL =
      url +
      `?serviceKey=${serviceKey}&pageNo=${page}&numOfRows=${numOfRows}&type=json`;
  
    const res = await fetch(finalURL, { cache: "no-store" });
  
    // const res = await fetch(finalURL, {
    //   next: { revalidate: 60 },
    // });
    const data = res.json();
  
    return data;
  }
  