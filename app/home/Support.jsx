import React from "react";

export default function Support() {
  return (
    <section className="py-[40px] md:py-[60px] lg:py-[90px] bg-bgDark overflow-hidden relative">
      <div className="absolute top-[9%] left-0 w-[100%] h-[91%] flex items-end justify-center">
        <img className="w-[160%] max-w-[unset] h-[unset] md:w-[100%]" src="/images/line-2.png" alt="" />
      </div>
      <div className="container relative">
        <div className="">
          <h2 className="text-center text-[25px] leading-[120%] font-mainFont font-bold text-[#000000] mb-[20px] md:mb-[32px] md:text-[30px]  xl:text-[40px] 2xl:text-[55px] mb-[30px] md:mb-[44px] lg:mb-[56px]">
            Supported Platforms
          </h2>
          <div className="flex justify-between flex-col sm:flex-row">
            <div className="flex sm:w-[calc(33.3%-6px)] md:w-[calc(33.3%-10px)] max-w-[unset] md:max-w-[400px] flex relative mb-[20px] sm:mb-0">
              <div className="w-[100%] h-[100%] flex items-center justify-center bg-white rounded-[20px] p-[25px] md:py-[30px] xl:py-[47px] text-center relative z-[1]">
                <img className="w-[45%]" src="/images/linkedin.svg" alt="" />
              </div>
              <div className="flex items-center justify-center absolute top-0 left-0 w-[50px] xl:w-[73px] translate-x-[-50%] translate-y-[-40%] translate-y-[-40%] rotate-[-30deg] z-[0]">
                <img src="/images/support/leaf-1.svg" alt="" />
              </div>
            </div>
            <div className="flex sm:w-[calc(33.3%-6px)] md:w-[calc(33.3%-10px)] max-w-[unset] md:max-w-[400px] flex relative mb-[20px] sm:mb-0">
              <div className="w-[100%] h-[100%] flex items-center justify-center bg-white rounded-[20px] p-[25px] md:py-[30px] xl:py-[47px] text-center relative z-[1]">
                <img className="w-[40%]" src="/images/indeed.svg" alt="" />
              </div>
            </div>
            <div className="flex sm:w-[calc(33.3%-6px)] md:w-[calc(33.3%-10px)] max-w-[unset] md:max-w-[400px] flex relative mb-0 sm:mb-0">
              <div className="w-[100%] h-[100%] flex items-center justify-center bg-white rounded-[20px] p-[25px] md:py-[30px] xl:py-[47px] text-center relative z-[1]">
                <img className="w-[38%]" src="/images/google.svg" alt="" />
              </div>
              <div className="flex items-center justify-center absolute bottom-0 right-0 w-[80px] xl:w-[104px] translate-x-[45%] translate-y-[45%] translate-y-[-40%] rotate-[110deg] z-[0]">
                <img src="/images/support/leaf-2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
