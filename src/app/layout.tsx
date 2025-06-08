import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "نخ‌نت | کسب‌وکارت رو نخ کن",
  description: "اگر نخ از تولید تا پوشاک سیستمی منظم و هوشمند داشته باشه، غوغا میشه.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <head>
        <link rel="preconnect" href="https://cdn.fontcdn.ir" />
        <link rel="stylesheet" href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" />
        <link rel="stylesheet" href="https://cdn.fontcdn.ir/Font/Persian/Lalezar/Lalezar.css" />
      </head>
      <body style={{ fontFamily: "Vazir, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
