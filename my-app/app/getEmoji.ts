export default function getEmoji(text: string) {
  switch (text) {
    case "실종":
      return "/missing.svg";

    case "호우":
      return "/rain.svg";

    case "지진":
      return "/earthquake.svg";

    case "화재":
      return "/fire.svg";

    case "교통":
    case "교통사고":
      return "/traffic.svg";

    case "방사능재난":
      return "/nuclear.svg";

    default:
      return "/caution.svg";
  }
}
