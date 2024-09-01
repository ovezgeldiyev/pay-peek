import React from "react";
const salaryList = [
  {
    id: "1",
    salary: "10th Percentile",
    annually: "44,000",
    monthly: "3,667",
    weekly: "846",
    hourly: "21.15",
  },
  {
    id: "2",
    salary: "25th Percentile",
    annually: "56,000",
    monthly: "4,667",
    weekly: "1,076",
    hourly: "26.92",
  },
  {
    id: "3",
    salary: "50th Percentile",
    annually: "75,000",
    monthly: "5,583",
    weekly: "1,288",
    hourly: "32.21",
  },
  {
    id: "4",
    salary: "75th Percentile",
    annually: "81,000",
    monthly: "6,750",
    weekly: "1,557",
    hourly: "38.94",
  },
  {
    id: "3",
    salary: "90th Percentile",
    annually: "98,000",
    monthly: "8,167",
    weekly: "1,884",
    hourly: "47.12",
  },
];
const benefitList = [
  {
    id: "1",
    title: "Paid Leave",
    icon: "/images/icons/peek/1.png",
    private: "8,123",
    public: "7,676",
  },
  {
    id: "2",
    title: "Supplemental Pay",
    icon: "/images/icons/peek/2.png",
    private: "2,128",
    public: "1,245",
  },
  {
    id: "3",
    title: "Insurance",
    icon: "/images/icons/peek/3.png",
    private: "4,223",
    public: "5,583",
  },
  {
    id: "4",
    title: "Retirement & Savings",
    icon: "/images/icons/peek/4.png",
    private: "3,389",
    public: "6,750",
  },
  {
    id: "5",
    title: "Required Benefits",
    icon: "/images/icons/peek/5.png",
    private: "6,328",
    public: "8,167",
  },
];
export default function Peek() {
  return (
    <div className="">
      <div className="container px-0 md:px-[24px] ">
        <div className="bg-[#EBEAF0] px-[20px] py-[60px] md:px-[32px] xl:px-[48px] xl:py-[114px] rounded-[0] md:rounded-[50px]">
          <div className="mb-10  px-5 md:px-[0]">
            {/* <div className="flex lg:text-[40px] mx-auto items-center justify-center w-10 h-10 lg:w-[70px] lg:h-[70px] rounded-[50px] shadow-btnShadow bg-main mb-4">
              👀
            </div> */}
            <h2 className="text-[25px]  text-center leading-[120%] font-mainFont font-bold text-[#000000] mb-[14px] md:mb-[18px] md:text-[30px]  xl:text-[40px] 2xl:text-[55px]">
              Peek Into Your Worth
            </h2>
          </div>
          <div className="lg:flex lg:mb-[120px] xl:mb-[220px] lg:items-center justify-between mb-[50px]">
            <div className="lg:w-[50%] lg:pl-[10px] relative z-[1] xl:pl-[50px]">
              <img
                className="hidden lg:inline-block absolute top-[-60px] z-[-1] left-[-16px] w-[146px]"
                src="/images/icons/peek/salFlow.png"
                alt=""
              />{" "}
              <div className="bg-white  p-4 mb-5 rounded-[12px] md:rounded-[16px] shadow-btnShadow md:px-[28px] md:py-[40px]">
                <table className="w-[100%] border-collapse">
                  <thead className=" ">
                    <tr className="">
                      <td className="py-2 md:py-[10px] border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0">
                        <div className="inline-block py-[4px] md:px-[32px] md:py-[7px] font-interFont font-medium px-[14px] text-[12px] md:text-[15px] text-white leading-1 rounded-[50px] bg-[#A276FF]">
                          Salary
                        </div>
                      </td>
                      <td className="py-2 md:py-[10px] text-center border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[10px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
                        Annually
                      </td>
                      <td className="py-2 md:py-[10px] text-center border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[10px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
                        Monthly
                      </td>
                      <td className="py-2 md:py-[10px] text-center border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[10px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
                        Weekly
                      </td>
                      <td className="py-2 md:py-[10px] text-center border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[10px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
                        Hourly
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryList.map((item, index) => {
                      return <SalaryRow {...item} key={index} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" px-0 md:px-0 lg:w-[calc(50%-15px)] lg:max-w-[454px]">
              <h3 className="text-center md:text-left md:text-xl font-bold mb-2">
                Percentile-Based <br className="hidden lg:block" /> Salary Data
              </h3>
              <p className="text-center md:text-left text-sm md:text-m">
                Uncover salary insights tailored to your industry, location, and
                experience level, ensuring you're equipped with accurate and
                up-to-date compensation information.
              </p>
            </div>
          </div>{" "}
          <div className="lg:flex lg:items-center justify-between mb-[20px]">
            <div className="lg:w-[50%] relative z-[1] lg:pr-[10px] xl:pr-[50px]">
              <img
                className="hidden lg:inline-block absolute bottom-[10px] left-[-60px] w-[100px]"
                src="/images/icons/peek/benFlow.png"
                alt=""
              />{" "}
              <img
                className="hidden lg:inline-block absolute z-[-1] top-[-50px] right-[5px] w-[100px] rotate-[35deg]"
                src="/images/icons/peek/benFlow2.png"
                alt=""
              />
              <div className="bg-white  p-4 mb-5 rounded-[12px] md:rounded-[16px] shadow-btnShadow md:px-[28px] md:py-[40px]">
                <table className="w-[100%] border-collapse">
                  <thead className=" ">
                    <tr className="">
                      <td className="py-2 md:py-[10px] border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0">
                        <div className="inline-block py-[4px] md:px-[32px] md:py-[7px] font-interFont font-medium px-[14px] text-[12px] md:text-[15px] text-black leading-1 rounded-[50px] bg-main">
                          Benefits
                        </div>
                      </td>
                      <td className="py-2 md:py-[10px] text-center border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[10px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
                        Private Sector
                      </td>
                      <td className="py-2 md:py-[10px] text-center border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[10px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
                        Public Sector
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {benefitList.map((item, index) => {
                      return <BenefitRow {...item} key={index} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" px-0 md:px-0 lg:w-[calc(50%-15px)] lg:order-[-1] lg:max-w-[454px] lg:pl-[10px] xl:pl-[50px]">
              <h3 className="text-center md:text-left md:text-xl font-bold mb-2">
                Comprehensive Benefits <br className="hidden lg:block" />{" "}
                Breakdown
              </h3>
              <p className="text-center md:text-left text-sm md:text-m">
                Access detailed benefits data, including overtime rates, paid
                time off, insurance coverage, retirement contributions, and more
                for both private and public sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const SalaryRow = (props) => {
  return (
    <tr className="[&:last-child>td]:border-b-0">
      <td className="py-2 md:py-[10px] border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[8px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
        {props.salary}
      </td>
      <td className="py-2 md:py-[10px] text-center border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[8px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
        ${props.annually}
      </td>
      <td className="py-2 md:py-[10px] text-center border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[8px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
        ${props.monthly}
      </td>
      <td className="py-2 md:py-[10px] text-center border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[8px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
        ${props.weekly}
      </td>
      <td className="py-2 md:py-[10px] text-center border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[8px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
        ${props.hourly}
      </td>
    </tr>
  );
};
export const BenefitRow = (props) => {
  return (
    <tr className="[&:last-child>td]:border-b-0">
      <td className="py-2 md:py-[10px] border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[8px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
        <div className="flex items-center">
          <img
            className="w-[20px] mr-[10px] lg:mr-[20px]"
            src={props.icon}
            alt=""
          />
          {props.title}
        </div>
      </td>
      <td className="py-2 md:py-[10px] text-center border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[8px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
        ${props.private}
      </td>
      <td className="py-2 md:py-[10px] text-center border-[#707070] border-[1px] border-solid border-t-0 border-l-0 border-r-0 text-[8px] sm:text-[12px] md:text-[15px] leading-1 font-medium font-interFont p-2">
        ${props.public}
      </td>
    </tr>
  );
};
