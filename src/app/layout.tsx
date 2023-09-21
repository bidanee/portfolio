import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "[FE] 이단비",
  description: "이단비의 포트폴리오",
  keywords: ["포트폴리오", "프론트엔드 개발자"],
  icons: {
    icon: "icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body>{children}</body>
    </html>
  );
}
