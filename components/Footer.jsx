import React from "react";
import Link from "next/link";
import { mailIcon } from "./SVG";

export default function Footer() {
  return (
    <footer className="pt-[24px] pb-[24px] md:pt-[50px] md:pb-[30px] bg-main rounded-t-[20px] lg:pt-[71px] lg:pb-[38px] ">
      <div className="container">
        <div>
          <div className="flex md:flex-nowrap flex-wrap items-center justify-center lg:mb-[40px] mb-[32px]">
            <Link
              className="hover:opacity-[0.8] transition-all text-[16px] lg:text-[18px] 
              leading-[1] lg:mr-[55px] md:mr-[36px] mr-[24px] font-medium text-black font-interFont
              order-[1] md:order-[unset]"
              href="/"
            >
              Terms
            </Link>
            <Link
              className="hover:opacity-[0.8] transition-all text-[16px] lg:text-[18px] leading-[1] lg:mr-[55px] md:mr-[36px] font-medium text-black font-interFont
              order-[2] md:order-[unset]"
              href="/"
            >
              Privacy
            </Link>
            <div className="mb-[16px] md:mb-[unset]  w-[100%] flex items-center justify-center md:w-[unset]  lg:mr-[55px] md:mr-[36px] order-[0] md:order-[unset]">
              <Link
                href="/"
                className="hover:opacity-[0.8] transition-all flex items-center justify-center w-[145px] md:w-[120px] lg:w-[145px]"
              >
                <img className="w-[100%]" src="images/footer-logo.png" alt="" />
              </Link>
            </div>
            <div className="mt-[16px] md:mt-[unset] w-[100%] md:w-[unset]  flex items-center justify-center order-[3] md:order-[unset]">
              <Link
                href="/"
                className="flex items-center justify-center [&>svg]:mr-[5px] lg:[&>svg]:mb-[-1px] [&>svg]:mb-[-2px] [&>svg]:w-[15px] [&>svg]:h-[12px] [&>svg]:text-black 
              text-[16px] lg:text-[18px] leading-[1] font-medium text-black font-interFont 
              hover:opacity-[0.8] transition-all "
              >
                {mailIcon} contact@paypeek.com
              </Link>
            </div>
          </div>
          <p className="text-center text-[12px] leading-[115%]  font-medium text-black font-interFont">
            @2024 PayPeek. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
