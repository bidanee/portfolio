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
      <body className=" h-[4000px] w-full">
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
