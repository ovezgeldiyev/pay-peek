import { tickIcon } from "@/components/SVG";
import React from "react";

export default function Careers() {
  return (
    <section className="py-[50px] md:py-[60px] lg:pt-[80px] lg:pb-[90px] xl:pt-[110px] xl:pb-[130px] 2xl:pt-[140px] 2xl:pb-[166px]">
      <div className="container xl:max-w-[1364px]">
        <div className="">
          <h2 className="text-center text-[25px] leading-[120%] font-mainFont font-bold text-[#000000] mb-[30px] md:mb-[55px] xl:mb-[85px] md:text-[30px]  xl:text-[40px] 2xl:text-[55px]">
            Empowering Careers at Every Stage 📈
          </h2>
          <div className="flex flex-col md:flex md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-center w-[100%] md:w-[calc(45%-15px)] md:max-w-[475px] max-w-[unset] mb-[35px] ">
              <img src="/images/career.png" alt="" />
            </div>
            <div className="flex flex-col items-center md:block md:w-[calc(55%-5px)] md:max-w-[578px]">
              <div className="mb-[30px] md:mb-[50px] lg:mb-[50px]">
                <h3 className="flex items-center justify-center md:justify-start mb-[15px] leading-[120%] font-mainFont font-bold text-[#000000] text-[25px] lg:text-[35px] [&>svg]:w-[32px] [&>svg]:h-[32px] [&>svg]:mr-[14px]">
                  {" "}
                  {tickIcon} Job Seekers
                </h3>
                <p className="text-center md:text-start text-[16px] md:text-[18px] xl:text-[20px] leading-[140%] text-black ">
                  Utilize PayPeek to determine your market value, evaluate job
                  postings, and confidently negotiate your offers and
                  compensation packages.
                </p>
              </div>
              <div className="mb-0">
                <h3 className="flex items-center justify-center md:justify-start mb-[15px] leading-[120%] font-mainFont font-bold text-[#000000] text-[25px] lg:text-[35px] [&>svg]:w-[32px] [&>svg]:h-[32px] [&>svg]:mr-[14px]">
                  {" "}
                  {tickIcon}Employees
                </h3>
                <p className="text-center md:text-start text-[16px] md:text-[18px] xl:text-[20px] leading-[140%] text-black ">
                  Utilize PayPeek to review comparable salaries, assess your
                  market value, and leverage this information to renegotiate
                  your current compensation package.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
