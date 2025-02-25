import "./globals.css";

export const metadata = {
  title: "کادرانو",
  description: "آکادمی کادرانو",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className="font-IRANSans min-h-screen overflow-x-hidden text-[#19191A]">
        {children}
      </body>
    </html>
  );
}
