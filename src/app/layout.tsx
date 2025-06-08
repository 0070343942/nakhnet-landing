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
        <link href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css" rel="stylesheet" />
        <link href="https://cdn.fontcdn.ir/Font/Persian/Lalezar/Lalezar.css" rel="stylesheet" />
      </head>
      <body className="vazir-font bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}