import Image from "next/image";
import { Hanken_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={hanken.className}>
      <div className="mobile:grid mobile:place-items-center mobile:h-screen mobile:w-screen">
        <div className="mobile:flex mobile:flex-wrap     
           max-[734px]:w-[375px]
         ">
          <div
            className="w-full mobile:w-[375px] mobile:h-[512px] rounded-b-[32px] mobile:rounded-[32px] text-[16px] mobile:text-[18px] text-light-lavender
                         bg-gradient-to-b from-light-slate-blue-background to-light-royal-blue-background"
          >
            <div className="flex items-center justify-center h-[72px] mobile:h-[103px]">
              <h1 className="text-[16px] mobile:text-2xl font-[700]">Your Result</h1>
            </div>
            <div className=" mobile:h-[236px] flex items-start justify-center">
              <div className="w-[139px] h-[139px] mobile:w-[200px] mobile:h-[200px] rounded-full bg-persian-blue-circle flex items-center justify-center relative">
                <div className="absolute top-[28px] mobile:static text-[52px] mobile:text-7xl font-[800] text-white">76</div>
                <div className="absolute bottom-[20px] mobile:bottom-[35px] text-light-lavender font-[500]">of 100</div>
              </div>
            </div>
            <div>
              <div className="text-center font-[800] text-[23px] mt-6 mb-0 mobile:m-0 mobile:text-[33px] text-white">Great</div>
              <div className="flex w-full justify-center mt-[10px] leading-5">
                <div className=" max-w-[70%] text-center mb-9 mobile:mb-0">You scored higher than 65% of the people who have taken these tests.</div>
              </div>
            </div>
          </div>

          <div className="w-full mobile:w-[375px] mobile:h-[512px] rounded-r-[32px] shadow-2xl shadow-slate-100 p-9 pt-0 font-[500] text-lg">
            <h2 className="h-[75px] mobile:h-[100px] mobile:text-2xl font-[700] flex items-center">Summary</h2>
            <div className="h-[53px] mb-[20px] w-full bg-light-red bg-opacity-5 rounded-md flex items-center">
              <Image src="/icon-reaction.svg" alt="reaction" width={20} height={20} className="ml-3 mr-3" />
              <span className="flex-grow text-light-red ">Reaction</span>
              <span className="mr-3">
                <span className="">80</span>

                <span className="text-persian-blue-circle"> / 100</span>
              </span>
            </div>

            <div className="h-[53px] mb-[20px] w-full bg-orangey-yellow bg-opacity-5 rounded-md flex items-center">
              <Image src="/icon-memory.svg" alt="memory" width={20} height={20} className="ml-3 mr-3" />
              <span className="flex-grow text-orangey-yellow ">Memory</span>
              <span className="mr-3">
                <span className="">92</span>

                <span className="text-persian-blue-circle"> / 100</span>
              </span>
            </div>

            <div className="h-[53px] mb-[20px] w-full bg-green-teal bg-opacity-5 rounded-md flex items-center">
              <Image src="/icon-verbal.svg" alt="verbal" width={20} height={20} className="ml-3 mr-3" />
              <span className="flex-grow text-green-teal ">Verbal</span>
              <span className="mr-3">
                <span className="">61</span>

                <span className="text-persian-blue-circle "> / 100</span>
              </span>
            </div>

            <div className="h-[53px] mb-[20px] w-full bg-pale-blue rounded-md flex items-center">
              <Image src="/icon-visual.svg" alt="visual" width={20} height={20} className="ml-3 mr-3" />
              <span className="flex-grow text-violet-blue-circle font-[700]">Visual</span>
              <span className="mr-3">
                <span className="">72</span>

                <span className="text-persian-blue-circle "> / 100</span>
              </span>
            </div>
            <div className="mt-[24px] mobile:mt-[40px]">
              <button className=" bg-dark-gray-blue w-full rounded-full text-white p-[14px] mobile:p-[15px] text-lg ">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// 375px
// bg-gradient-to-b from-violet-blue-circle to-light-royal-blue-background"
//
