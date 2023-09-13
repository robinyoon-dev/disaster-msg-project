import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "전국 재난 톡",
  description: "현재 전국 재난 메시지를 볼 수 있습니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
