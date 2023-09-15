import "./globals.css";

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
    <html lang="ko" className="dark">
      <body className="dark:bg-gray-900">{children}</body>
    </html>
  );
}
