"use client";
import { arrowRight } from "@/components/SVG";
import WaitlistPopup from "@/components/WaitlistPopup";
import React, { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="py-[50px] md:py-[70px] lg:py-[90px] xl:py-[120px] 2xl:py-[150px]">
        <div className="container">
          <div className="flex flex-col md:flex md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col items-center md:block text-center md:text-left md:w-[calc(60%-10px)] md:max-w-[810px]">
              <h1 className="text-[25px] leading-[120%] font-mainFont font-bold text-[#000000] mb-[20px] md:mb-[32px] md:text-[30px]  xl:text-[40px] 2xl:text-[55px]">
                Empowering Professionals With Market Value Statistics
              </h1>
              <p className="w-[100%] md:w-[85%] mb-[30px] md:mb-[40px] xl:mb-[50px] text-[16px] md:text-[18px] xl:text-[20px] leading-[140%] text-black  md:max-w-[603px]">
                Seamlessly access in-depth compensation data right from your
                favorite job posting platforms to verify your market value and
                avoid the guesswork and uncertainty when evaluating new job and
                promotional opportunities.
              </p>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="flex items-center p-[6px] pl-[20px] md:pl-[30px] bg-main rounded-[50px] text-[14px] md:text-[18px] leading-[1] font-semibold text-black hover:bg-[#62DE7D] transition duration-150 ease-in-out shadow-btnShadow"
              >
                Join The Waitlist
                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex items-center justify-center bg-white rounded-[50%] ml-[10px] md:ml-[16px]">
                  <span className="block w-[16px] h-[7px]  md:w-[22px] md:h-[9px] [&>svg]:w-[100%] [&>svg]:h-[100%] [&>svg]:opacity-[1]">
                    {arrowRight}
                  </span>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-center w-[100%] mx-auto md:w-[calc(55%-10px)] md:max-w-[586px] md:m-[unset] max-w-[unset] ml-[0] mb-[30px] md:ml-[-10%] md:pt-[84px] pt-0 order-[-1] md:order-[1]">
              <img src="/images/hero.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <WaitlistPopup
        setOpen={setOpen}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
