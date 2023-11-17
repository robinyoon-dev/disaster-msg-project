interface KeywordMap {
  [keyword: string]: string[];
}

export default function getKeywords(text: string) {
  const keywordMap: KeywordMap = {
    실종: ["☎182"],
    산사태: ["산사태"],
    호우: ["호우", "집중호우", "많은 비", "강한 비"],
    대설: ["대설", "많은 눈"],
    강풍: ["강풍", "강한 바람"],
    한파: ["한파", "기온하강", "최저기온", "영하로"],
    풍랑: ["풍랑"],
    연안사고: ["연안사고"],
    태풍: ["태풍"],
    해일: ["해일"],
    지진: ["지진"],
    돌풍: ["돌풍"],
    황사: ["황사"],
    홍수: ["홍수"],
    우박: ["우박"],
    낙뢰: ["낙뢰", "번개"],
    안개: ["안개"],
    건조: ["건조"],
    폭염: ["폭염"],
    화재: ["화재", "공장화재"],
    교통사고: ["교통사고"],
    교통: ["교통", "도로"],
    단수: ["단수"],
    산불: ["산불"],
    폭발: ["폭발"],
    가스: ["가스"],
    붕괴: ["붕괴"],
    전기가스: ["전기가스"],
    상하수도: ["상하수도"],
    "유해화학물질 유출사고": ["유해화학물질", "화학물질", "누출", "화학사고"],
    정전: ["정전"],
    가뭄: ["가뭄"],
    폭풍우: ["폭풍우"],
    지진해일: ["지진해일"],
    감염병: ["감염병", "코로나"],
    병충해: ["병충해"],
    식중독: ["식중독"],
    익사: ["익사"],
    매몰: ["매몰"],
    방사능재난: ["방사능"],
    화산: ["화산"],
  };

  let finalText = "";

  if (text.includes("경보")) {
    finalText = getTextInFrontOf("경보");
  } else if (text.includes("주의보")) {
    finalText = getTextInFrontOf("주의보");
  } else if (text.includes("예비특보")) {
    finalText = getTextInFrontOf("예비특보");
  } else {
    finalText = text;
  }

  for (const keyword in keywordMap) {
    for (const word of keywordMap[keyword]) {
      let regexp = new RegExp(`(\\s|])${word}`);
      if (regexp.test(finalText)) {
        return keyword;
      }
    }
  }

  return "기타";

  function getTextInFrontOf(specificWord: string) {
    const indexOfWord = text.indexOf(specificWord);
    return text.slice(0, indexOfWord);
  }
}
