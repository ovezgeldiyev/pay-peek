"use client";
import React, { useEffect } from "react";
// import EmailFieldWait from "../EmailFieldWait";
import { motion } from "framer-motion";

function WaitlistPopup({ onClose, open, setOpen }) {
  const closeModal = (e) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  // Disable scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (!open) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
      className="z-[1048] fixed top-0 left-0 w-[100%] h-[100%]  md:flex md:items-center bg-[#DBD8EA] md:bg-[#D9D9D9]/80 overflow-auto md:p-10 xl:p-14"
    >
      <div
        role="presentation"
        className=" w-[100%] overflow-hidden xl:max-w-[1300px] md:max-w-[963px] md:mx-auto md:rounded-3xl  xl:pt-[110px] md:pt-[80px] pt-[100px] md:pb-[124px]  xl:pb-[180px] pb-[100px] relative z-0 md:shadow-lg px-5 md:bg-[#DBD8EA] md:m-auto "
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 md:right-8 md:right-5 md:top-8  md:top-4 flex items-center justify-center w-8 h-8 md:w-[50px] md:h-[50px] 2xl:w-[65px] 2xl:h-[65px]"
        >
          <img
            className="w-[100%] h-[100%] object-contain"
            src="/images/close.svg"
            alt=""
          />
        </button>
        <div className="mb-9">
          <h2 className="text-[25px] md:mb-[32px] md:text-[30px]  xl:text-[40px] 2xl:text-[55px] font-bold leading-[130%] text-black md:mb-8 mb-4 text-center  mx-auto md:max-w-[unset]">
          Be the first to know when PayPeek launches 🚀
          </h2>
          <p className="text-sm lg:text-[18px] xl:text-m leading-normal font-medium text-black max-w-[650px] mx-auto text-center  ">
          Sign up now to receive exclusive updates and be notified when PayPeek launches!
          </p>
        </div>
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
    </motion.div>
  );
}

export default WaitlistPopup;
