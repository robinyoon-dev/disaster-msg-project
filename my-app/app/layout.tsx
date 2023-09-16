import Head from "next/head";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "전국 재난 톡",
  description: "전국 각 지역에서 발송된 재난 메시지를 볼 수 있습니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <Head>
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://disaster-msg-project.vercel.app/"
        />
        <meta property="og:title" content="전국 재난 톡" />

        <meta
          property="og:description"
          content="전국 각 지역에서 발송된 재난 메시지를 볼 수 있습니다."
        />
        <meta property="og:site_name" content="전국 재난 톡" />
        <meta property="og:locale" content="ko_KR" />

        <meta
          property="og:image"
          content="https://disaster-msg-project.vercel.app/ogimage.png"
        />
        <meta property="og:image:type" content=".png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="About 전국 재난 톡" />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="전국 재난 톡" />
        <meta name="twitter:text:title" content="전국 재난 톡" />
        <meta
          name="twitter:description"
          content="전국 각 지역에서 발송된 재난 메시지를 볼 수 있습니다."
        />
        <meta
          name="twitter:image"
          content="https://disaster-msg-project.vercel.app/ogimage.png"
        />
        <meta name="twitter:image:type" content=".png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta property="twitter:image:alt" content="About 전국 재난 톡" />
      </Head>
      <body className="dark:bg-gray-900">{children}</body>
    </html>
  );
}
