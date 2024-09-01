import React from "react";

export default function Mission() {
  return (
    <section className="py-[40px] md:py-[50px] lg:pt-[60px] lg:pb-[90px] xl:pt-[90px] xl:pb-[130px] 2xl:pt-[105px] 2xl:pb-[178px]">
      <div className="container xl:max-w-[1364px]">
        <div className="flex flex-col md:flex md:flex-row md:items-center md:justify-between max-w-[1050px] mx-[auto]">
          <div className="flex items-center justify-center w-[100%] mx-auto md:w-[calc(52%-5px)] md:max-w-[500px] max-w-[unset] mb-[35px] md:mr-[-4%] mr-[-9%]">
            <img  src="/images/mission.svg" alt="" />
          </div>
          <div className="flex flex-col items-center md:block text-center md:text-left md:w-[calc(52%-5px)] md:max-w-[530px]">
            <h2 className="text-[25px] leading-[120%] font-mainFont font-bold text-[#000000] mb-[14px] md:mb-[18px] md:text-[30px]  xl:text-[40px] 2xl:text-[55px]">
              Our Mission 🎯
            </h2>
            <p className=" text-[16px] md:text-[18px] xl:text-[20px] leading-[140%] text-black ">
              PayPeek is dedicated to delivering accurate and essential
              compensation data, empowering both job seekers and current
              employees to gain a comprehensive understanding of their market
              value. <br />
              By providing transparent insights, we aim to address workforce
              inequality and foster fairer opportunities for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
