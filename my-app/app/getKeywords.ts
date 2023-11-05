interface KeywordMap {
  [keyword: string]: string[];
}

export default function getKeywords(text: string) {
  const keywordMap: KeywordMap = {
    실종: ["☎182"],
    산사태: ["산사태"],
    호우: ["호우", "많은 비", "강한 비"],
    대설: ["대설"],
    강풍: ["강풍"],
    태풍: ["태풍"],
    해일: ["해일"],
    폭풍우: ["폭풍우"],
    지진: ["지진"],
    돌풍: ["돌풍"],
    지진해일: ["지진해일"],
    황사: ["황사"],
    홍수: ["홍수"],
    가뭄: ["가뭄"],
    우박: ["우박"],
    화산: ["화산"],
    낙뢰: ["낙뢰", "번개"],
    건조: ["건조"],
    병충해: ["병충해"],
    안개: ["안개"],
    폭염: ["폭염"],
    화재: ["화재"],
    교통사고: ["교통사고"],
    단수: ["단수"],
    산불: ["산불"],
    익사: ["익사"],
    폭발: ["폭발"],
    가스: ["가스"],
    붕괴: ["붕괴"],
    전기가스: ["전기가스"],
    상하수도: ["상하수도"],
    매몰: ["매몰"],
    방사능재난: ["방사능"],
    "유해화학물질 유출사고": ["화학물질", "누출", "화학사고"],
    정전: ["정전"],
    교통: ["교통", "도로"],
    감염병: ["감염병", "코로나"],
    식중독: ["식중독"],
  };

  let finalText = "";

  if (text.includes("경보")) {
    finalText = getTextInFrontOf("경보");
  } else if (text.includes("주의보")) {
    finalText = getTextInFrontOf("주의보");
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
