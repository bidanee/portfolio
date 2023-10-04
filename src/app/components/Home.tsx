export default function Home() {
  return (
    <div id="home">
      <div className=" w-full h-screen flex flex-col items-center justify-center">
        <h1 className="relative text-7xl font-bold mb-2">이단비</h1>
        <div className="w-[32rem] h-[32rem] rounded-full bg-yellow-200 right-1/2 absolute blur-3xl z-[-11]" />
        <div className="w-[32rem] h-[32rem] rounded-full bg-sky-200 left-1/2 absolute blur-3xl z-[-11]" />
        <div className="w-[32rem] h-[32rem] rounded-full bg-red-200  absolute blur-3xl z-[-11]" />
        <h2 className="text-5xl font-bold">프론트엔드 개발자 포트폴리오</h2>
        <div className="border-r-8 h-8 m-4 border-gray-100" />
        <div className="flex flex-col items-center text-3xl">
          <span>안녕하세요.</span>
          <p>
            <span className="text-blue-500 font-bold">React</span>
            <span>로 개발하며 꾸준히 {"'성장'"}하는</span>
          </p>
          <span>프론트엔드 개발자 이단비입니다.</span>
        </div>
      </div>
    </div>
  );
}
