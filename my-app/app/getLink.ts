export default function getLink(msg: string) {
  //'vo.la/' 위치
  const start = msg.indexOf("vo.la/");

  //전화기 이모지 있는 곳 위치
  const end = msg.indexOf("☎");

  const resultLink = msg.slice(start, end - 2);


  return "https://"+resultLink.trim();
}
