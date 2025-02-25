import "./globals.css";

export const metadata = {
  title: "پژوهاد",
  description: "آکادمی پژوهاد",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className="min-h-screen overflow-x-hidden text-[#19191A]">
        {children}
      </body>
    </html>
  );
}
