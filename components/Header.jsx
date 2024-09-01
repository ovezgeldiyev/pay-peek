"use client";
import React, { useEffect, useState } from "react";
import { arrowRight, burgerIcon } from "./SVG";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import WaitlistPopup from "./WaitlistPopup";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [menu, setMenu] = useState(false);
  const closeMenu = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };

  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  return (
    <>
      <div className="fixed bg-bg top-0 left-0 w-[100%] py-0 lg:py-4 z-[100]">
        <div className="container px-0 lg:px-8">
          <div className=" py-4 px-5 sm:px-6 lg:p-0 bg-bg relative z-[200] flex items-center justify-between">
            <div className="flex items-center justify-center w-[120px] lg:w-[158px] ">
              <img className="w-[100%]" src="/images/logo.svg" alt="logo" />
            </div>
            <div
              className={
                "hidden md:block fixed lg:!translate-x-0 top-[72px] left-0 w-[100%] lg:w-[unset] lg:static  z-[100] h-[calc(100%-72px)] bg-black/50 lg:bg-[unset] translate-x-[-100%] transition-all " +
                (menu ? "!translate-x-0" : "")
              }
              onClick={closeMenu}
            >
              <div className="h-[100%]  max-w-[236px] w-[100%] absolute left-0 top-0 overflow-auto   lg:items-center bg-bg p-4 lg:flex lg:static lg:bg-[unset] lg:overflow-visible lg:p-[unset] lg:max-w-[unset] lg:w-[unset]">
                <a
                  className="block py-2 lg:mr-7"
                  href="#statistics"
                  onClick={() => setMenu(false)}
                >
                  Statistics
                </a>
                <a
                  className="block py-2 lg:mr-7"
                  href="#mission"
                  onClick={() => setMenu(false)}
                >
                  Mission
                </a>
                <a
                  className="block py-2 lg:mr-7"
                  href="#features"
                  onClick={() => setMenu(false)}
                >
                  Features
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="flex mt-2 w-[100%] items-center justify-between p-[6px] pl-[20px] md:pl-[30px] lg:mt-0 bg-main rounded-[50px] text-[14px] md:text-[18px] leading-[1] font-semibold text-black hover:bg-[#62DE7D] transition duration-150 ease-in-out shadow-btnShadow"
                >
                  Join The Waitlist
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex items-center justify-center bg-white rounded-[50%] ml-[10px] md:ml-[16px]">
                    <span className="block w-[16px] h-[7px]  md:w-[22px] md:h-[9px] [&>svg]:w-[100%] [&>svg]:h-[100%] [&>svg]:opacity-[1]">
                      {arrowRight}
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div
              onClick={toggleDrawer}
              className="flex lg:hidden items-center justify-center w-[40px] h-[40px] rounded-[50px] [&>svg]:w-[24px] [&>svg]:h-[24px] [&>svg]:text-black cursor-pointer transition-all hover:opacity-[0.8] "
            >
              {burgerIcon}
            </div>
          </div>
          <div className="block lg:hidden">
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="top"
              size="unset"
              overlayColor="#00000000"
              className="fixed top-[72px!important] z-[101!important] "
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div className="flex flex-col items-center">
                  <a
                    className="block p-2 w-[100%] text-center font-medium mb-3 hover:opacity-[0.8]"
                    href="#statistics"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Statistics
                  </a>
                  <a
                    className="block p-2 w-[100%] text-center font-medium mb-3 hover:opacity-[0.8]"
                    href="#mission"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Mission
                  </a>
                  <a
                    className="block p-2 w-[100%] text-center font-medium mb-4 hover:opacity-[0.8]"
                    href="#features"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Features
                  </a>
                  <button
                    onClick={() => {
                      setOpen(true), setIsOpen(!isOpen);
                    }}
                    type="button"
                    className="flex items-center justify-between p-[6px] pl-[20px] md:pl-[30px] lg:mt-0 bg-main rounded-[50px] text-[14px] md:text-[18px] leading-[1] font-semibold text-black hover:bg-[#62DE7D] transition duration-150 ease-in-out shadow-btnShadow"
                  >
                    Join The Waitlist
                    <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex items-center justify-center bg-white rounded-[50%] ml-[10px] md:ml-[16px]">
                      <span className="block w-[16px] h-[7px]  md:w-[22px] md:h-[9px] [&>svg]:w-[100%] [&>svg]:h-[100%] [&>svg]:opacity-[1]">
                        {arrowRight}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
      <WaitlistPopup
        setOpen={setOpen}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
