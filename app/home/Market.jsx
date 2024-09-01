"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Market() {
  const value1 = 42;
  const value2 = 85;
  const value3 = 90;

  return (
    <section className="py-[40px] md:py-[60px] lg:py-[90px] bg-bgDark  overflow-hidden relative">
      <div className="absolute top-[6%] left-0 w-[100%] h-[94%] flex items-end justify-center">
        <img className="w-[160%] max-w-[unset] md:w-[100%]" src="/images/line.png" alt="" />
      </div>
      <div className="container xl:max-w-[1344px] relative">
        <div className="">
          <h2 className="text-center text-[25px] leading-[120%] font-mainFont font-bold text-[#000000]  md:text-[30px]  xl:text-[40px] 2xl:text-[55px] mb-[30px] md:mb-[60px] xl:mb-[90px]">
            Market Statistics
          </h2>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="flex w-[100%] mb-[20px] md:mb-0  md:w-[calc(33.3%-10px)] lg:w-[calc(33.3%-15px)]  max-w-[unset] md:max-w-[400px] relative">
              <div className="w-[100%] h-[100%] flex flex-col items-center bg-white rounded-[20px] px-[30px] xl:px-[50px] pt-[30px] xl:pt-[50px] pb-[40px] xl:pb-[70px] text-center relative z-[1]">
                <div className="flex items-center justify-center relative w-[140px] h-[140px] md:w-[110px] md:h-[110px] lg:w-[140px] lg:h-[140px] xl:w-[187px] xl:h-[187px] mb-[18px] md:mb-[28px] ">
                  <CircularProgressbar
                    value={value1}
                    strokeWidth={8}
                    styles={buildStyles({
                      pathColor: "#76FF94",
                      textColor: "#000000",
                      strokeLinecap: "butt",
                      trailColor: "#676B6850",
                      pathTransitionDuration: 0.15,
                    })}
                  />
                  <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[32px] leading-1 font-semibold font-interFont xl:text-[50px]">
                    {value1}%
                  </span>
                </div>
                <p className="text-[18px] xl:text-[22px] leading-[140%] text-black font-semibold">
                  Professionals that have negotiated their salary
                </p>
              </div>
              <div className="flex items-center justify-center absolute top-[20%] left-0 xl:w-[103px] translate-x-[-50%] z-[0]">
                <img src="/images/market/leaf-1.svg" alt="" />
              </div>
            </div>
            <div className="flex w-[100%] mb-[20px] md:mb-0 md:w-[calc(33.3%-10px)] lg:w-[calc(33.3%-15px)]  max-w-[unset] md:max-w-[400px] relative">
              <div className="w-[100%] h-[100%] flex flex-col items-center bg-white rounded-[20px] px-[30px] xl:px-[50px] pt-[30px] xl:pt-[50px] pb-[40px] xl:pb-[70px] text-center relative z-[1]">
                <div className="flex items-center relative justify-center w-[140px] h-[140px] md:w-[110px] md:h-[110px] lg:w-[140px] lg:h-[140px] xl:w-[187px] xl:h-[187px] mb-[18px] md:mb-[28px] ">
                  <CircularProgressbar
                    value={value2}
                    strokeWidth={8}
                    styles={buildStyles({
                      pathColor: "#76FF94",
                      textColor: "#000000",
                      strokeLinecap: "butt",
                      trailColor: "#676B6850",
                      pathTransitionDuration: 0.15,
                    })}
                  />
                  <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[32px] leading-1 font-semibold font-interFont xl:text-[50px]">
                    {value2}%
                  </span>
                </div>
                <p className="text-[18px] xl:text-[22px] leading-[140%] text-black font-semibold  max-w-[250px]">
                  Salary Negotiation Success Rate
                </p>
              </div>
              <div className="flex items-center justify-center absolute top-0 right-0 xl:w-[97px] translate-y-[-36%]  translate-x-[26%] rotate-[28deg] z-[0]">
                <img src="/images/market/leaf-2.svg" alt="" />
              </div>
            </div>
            <div className="flex w-[100%] mb-[0] md:mb-0 md:w-[calc(33.3%-10px)] lg:w-[calc(33.3%-15px)]  max-w-[unset] md:max-w-[400px] relative">
              <div className="w-[100%] h-[100%] flex flex-col items-center bg-white rounded-[20px] px-[30px] xl:px-[50px] pt-[30px] xl:pt-[50px] pb-[40px] xl:pb-[70px] text-center relative z-[1]">
                <div className="flex items-center relative justify-center w-[140px] h-[140px] md:w-[110px] md:h-[110px] lg:w-[140px] lg:h-[140px] xl:w-[187px] xl:h-[187px] mb-[18px] md:mb-[28px] ">
                  <CircularProgressbar
                    value={value3}
                    strokeWidth={8}
                    styles={buildStyles({
                      pathColor: "#76FF94",
                      textColor: "#000000",
                      strokeLinecap: "butt",
                      trailColor: "#676B6850",
                      pathTransitionDuration: 0.15,
                    })}
                  />
                  <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[32px] leading-1 font-semibold font-interFont xl:text-[50px]">
                    {value3}%
                  </span>
                </div>
                <p className="text-[18px] xl:text-[22px] leading-[140%] text-black font-semibold ">
                  Percentage of Employers willing to negotiate salary
                </p>
              </div>
              <div className="flex items-center justify-center absolute bottom-0 right-0 xl:w-[90px] translate-x-[37%] rotate-[70deg] z-[0]">
                <img src="/images/market/leaf-3.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
