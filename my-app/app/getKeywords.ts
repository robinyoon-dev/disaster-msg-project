export default function getKeywords(text: string) {
  if (
    text.includes("☎182") &&
    (text.includes("실종된") ||
      text.includes("배회중인") ||
      text.includes("목격된"))
  ) {
    return "실종";
  } else if (
    text.includes("산사태 경보") ||
    text.includes("산사태 주의보") ||
    text.includes("산사태경보") ||
    text.includes("산사태주의보")
  ) {
    return "산사태";
  } else if (
    text.includes("강풍주의보") ||
    text.includes("강풍경보") ||
    text.includes("강풍 주의보") ||
    text.includes("강풍 경보")
  ) {
    return "강풍";
  } else if (
    text.includes("풍랑주의보") ||
    text.includes("풍랑경보") ||
    text.includes("풍랑 주의보") ||
    text.includes("풍랑 경보")
  ) {
    return "풍랑";
  } else if (
    text.includes("호우") ||
    text.includes("많은 비") ||
    text.includes("강한 비")
  ) {
    return "호우";
  } else if (text.includes("대설")) {
    return "대설";
  } else if (text.includes("강풍")) {
    return "강풍";
  } else if (text.includes("태풍")) {
    return "태풍";
  } else if (text.includes("해일")) {
    return "해일";
  } else if (text.includes("폭풍우")) {
    return "폭풍우";
  } else if (text.includes("지진")) {
    return "지진";
  } else if (text.includes("돌풍")) {
    return "돌풍";
  } else if (text.includes("지진해일")) {
    return "지진해일";
  } else if (text.includes("황사")) {
    return "황사";
  } else if (text.includes("산사태")) {
    return "산사태";
  } else if (text.includes("홍수")) {
    return "홍수";
  } else if (text.includes("가뭄")) {
    return "가뭄";
  } else if (text.includes("우박")) {
    return "우박";
  } else if (text.includes("화산")) {
    return "화산";
  } else if (text.includes("낙뢰") || text.includes("번개")) {
    return "낙뢰";
  } else if (text.includes("건조")) {
    return "건조";
  } else if (text.includes("병충해")) {
    return "병충해";
  } else if (text.includes("안개")) {
    return "안개";
  } else if (text.includes("폭염")) {
    return "폭염";
  }

  if (text.includes("화재")) {
    return "화재";
  } else if (text.includes("교통사고")) {
    return "교통사고";
  } else if (text.includes("단수")) {
    return "단수";
  } else if (text.includes("산불")) {
    return "산불";
  } else if (text.includes("익사")) {
    return "익사";
  } else if (text.includes("폭발")) {
    return "폭발";
  } else if (text.includes("가스")) {
    return "가스";
  } else if (text.includes("붕괴")) {
    return "붕괴";
  } else if (text.includes("전기가스")) {
    return "전기가스";
  } else if (text.includes("상하수도")) {
    return "상하수도";
  } else if (text.includes("매몰")) {
    return "매몰";
  } else if (text.includes("방사능")) {
    return "방사능재난";
  } else if (
    text.includes("화학물질") ||
    text.includes("누출") ||
    text.includes("화학사고")
  ) {
    return "유해화학물질 유출사고";
  } else if (text.includes("정전")) {
    return "정전";
  } else if (text.includes("교통") || text.includes("도로")) {
    return "교통";
  } else if (text.includes("감염병") || text.includes("코로나")) {
    return "감염병";
  } else if (text.includes("식중독")) {
    return "식중독";
  } else {
    return "기타";
  }
}
