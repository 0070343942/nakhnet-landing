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
    <html lang="fa" dir="rtl">
      <body className="vazir-font bg-gray-50 text-black">
        {children}
      </body>
    </html>
  );
}
