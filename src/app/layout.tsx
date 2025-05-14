import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Dr.Wait",
  description: "-",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={''}
      >
        {children}
      </body>
    </html>
  );
}
