import { NextResponse } from "next/server";
import config from "@/config/serviceKey.config";
// import type { NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
//   message: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//     const { page } = req.query
//   try {
//     const result = await someAsyncOperation();
//     res.status(200).send({ result });
//   } catch (err) {
//     res.status(500).send({ error: "failed to fetch data" });
//   }
// }

//Route Handler
export async function GET(request: Request) {
  console.log("RouteHandler 내부!");
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");

  const serviceKey = config.serviceKey;
  const url =
    "https://apis.data.go.kr/1741000/DisasterMsg3/getDisasterMsg1List";
  let numOfRows = 5;
  const finalURL =
    url +
    `?serviceKey=${serviceKey}&pageNo=${page}&numOfRows=${numOfRows}&type=json`;

  const res = await fetch(finalURL, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return NextResponse.json({ data });
}
