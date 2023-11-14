import Image from "next/image";
import { Hanken_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={hanken.className}>
      <div
        className="w-[367px] h-[512px] 
        rounded-[32px] 
        text-[18px] 
      bg-gradient-to-b from-light-slate-blue-background to-light-royal-blue-background
      text-light-lavender
      "
      >
        <div className="flex items-center justify-center h-[103px]">
          <span className="text-2xl font-[700]">Your Result</span>
        </div>
        <div className="h-[236px] flex items-start justify-center">
          <div className="w-[200px] h-[200px] rounded-full bg-persian-blue-circle flex items-center justify-center relative">
            <div
              className="
          text-7xl font-[800] text-white"
            >
              76
            </div>
            <div
              className="absolute bottom-[35px] 
      text-light-lavender
            font-[500]
            "
            >
              of 100
            </div>
          </div>
        </div>
        <div>
          <div className="text-center font-[800] text-[33px] text-white">Great</div>
          <div className="flex w-full justify-center mt-[10px] leading-5">
            <div className=" max-w-[70%] text-center">
              You scored higher than 65% of the people who have taken these tests.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// 367px
// bg-gradient-to-b from-violet-blue-circle to-light-royal-blue-background"
//
