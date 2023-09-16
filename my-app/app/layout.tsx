import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "전국 재난 톡",
  description: "전국 각 지역에서 발송된 재난 메시지를 볼 수 있습니다.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "전국 재난 톡",
    description: "전국 각 지역에서 발송된 재난 메시지를 볼 수 있습니다.",
    type: "website",
    siteName: "전국 재난 톡",
    url: "https://disaster-msg-project.vercel.app/",
    locale: "ko_KR",
    images: [
      {
        url: "https://disaster-msg-project.vercel.app/ogimage.png",
        width: 1200,
        height: 630,
        alt: "전국 재난 톡",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "전국 재난 톡",
    description: "전국 각 지역에서 발송된 재난 메시지를 볼 수 있습니다.",
    site: "@robinyoondev",
    creator: "@robinyoondev",
    images: [
      {
        url: "https://disaster-msg-project.vercel.app/ogimage.png",
        alt: "전국 재난 톡",
      },
    ],
  },
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
