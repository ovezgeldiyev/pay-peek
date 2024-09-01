import React from "react";

export default function Waitlist() {
  return (
    <div className="xl:pt-[160px] xl:pb-[135px] lg:pt-[140px] lg:pb-[120px] md:pt-[100px] md:pb-[80px] pt-[80px] pb-[80px]">
      <div className="container">
        <div>
          <h2
            className="text-[25px] md:text-[30px]  xl:text-[40px] 2xl:text-[55px] font-bold font-mainFont text-black tracking-[-0.03em] 
          text-center xl:mb-[20px]  mb-[18px] leading-[1.2]"
          >
      Be the first to know when PayPeek launches 🚀
          </h2>
          <p className="text-sm lg:text-[18px] xl:text-m tracking-[-0.03em] font-mainFont text-center xl:mb-[74px] md:mb-[64px] mb-[36px] ">
            Sign up now to receive exclusive updates and be notified when
            PayPeek launches!
          </p>
          <div className="relative max-w-[440px] md:max-w-[600px] lg:max-w-[771px] mx-auto flex items-center justify-center leading-[1]">
            <input
              type="text"
              placeholder="Email Address"
              className="!leading-[1] block shadow-inputShadow font-dmSansFont font-light placeholder:text-[#9CBACC]  text-black text-sm md:text-m lg:text-l lg:pt-[18px] lg:pb-[17px] lg:pl-[44px] lg:pr-[195px]
               w-[100%] rounded-[50px] md:pt-[14px] md:pb-[14px] md:pl-[32px] md:pr-[160px] pt-[12px] pb-[11px] pl-[16px] sm:pr-[130px] pr-[110px]"
            />
            <button
              type="button"
              className="!leading-[1] w-[100px] sm:w-[120px] md:w-[150px] lg:w-[186px] font-interFont text-[14px] sm:text-sm md:text-m lg:text-l text-[#072A49] font-medium lg:pt-[18px] lg:pb-[18px] md:pt-[14px] md:pb-[14px] pt-[11px] pb-[11px]
              flex items-center hover:bg-[#62DE7D] transition duration-150 ease-in-out transition-all justify-center z-5
               bg-main rounded-[50px] absolute top-[50%] right-[3px] translate-y-[-50%]"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
