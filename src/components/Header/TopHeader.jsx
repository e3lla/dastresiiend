import React from "react";
import Image1 from "../../Images/logo.png";

const TopHeader = () => {
  return (
    <div className="hidden lg:flex w-full h-[90px] items-center">
      <div className="relative flex gap-8 items-center w-full max-w-[1200px] mx-auto px-4">
        <a href="/">
          <img alt="فروشگاه اینترنتی دسترسی" className="w-24 h-[40px]" src={Image1} />
        </a>

        <div className="relative" id="main-search">
          <div className="hidden md:flex bg-gray items-center justify-center pr-2 rounded-xl shadow">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"/>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
              <g id="SVGRepo_iconCarrier">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#bababa" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 22L20 20" stroke="#bababa" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <input
              className="w-64 md:w-72 lg:w-80 h-10 bg-transparent pr-2 outline-none text-gray max-w-full"
              id="search-decoy"
              type="search"
              placeholder="جستجو محصولات"
            />
          </div>
        </div>
  <div className="flex flex-wrap items-center">
            <a className="px-3 py-2 text-sm text-gray-light hover-icon" href="/customer-club">باشگاه مشتریان</a>
            <a className="px-3 py-2 text-sm text-gray-light hover-icon" href="/blog">بلاگ</a>
            <a className="px-3 py-2 text-sm text-gray-light hover-icon" href="/contact">ارتباط ما</a>
            <a className="px-3 py-2 text-sm text-gray-light hover-icon" href="/about">درباره ما</a>

    <div className="indicator flex xl:mr-[180px]  ">
        <div tabIndex={0} role="button" className="btn btn-mine relative ml-[10px]">
                <svg width="24px" height="24px" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#FE5F55">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#FE5F55" strokeWidth="4.8">
                    <polyline fill="#FE5F55" stroke="#FE5F55" strokeMiterlimit="10" strokeWidth="1.56" points="7.21 15.82 22.48 12.96 22.48 4.36 4.15 4.36"/>
                    <path fill="none" stroke="#FE5F55" strokeMiterlimit="10" strokeWidth="1.56" d="M.52,1.5H3.39L7.2,15.82,5.54,18.31a1.48,1.48,0,0,0-.24.82h0a1.46,1.46,0,0,0,1.46,1.46h11.9"/>
                    <circle fill="none" stroke="#FE5F55" strokeMiterlimit="10" strokeWidth="1.56" cx="18.66" cy="21.55" r="0.95"/>
                    <circle fill="none" stroke="#FE5F55" strokeMiterlimit="10" strokeWidth="1.56" cx="9.11" cy="21.55" r="0.95"/>
                  </g>
                </svg>
                <span className="badge badge-sm w-2.5 indicator-item badge-orange rounded-[15px]">0</span>
              </div>
              <button className="btn btn-md sm:btn-sm md:btn-md rounded-[15px] btn-primary mb-0 btn-hover-blue">ورود و ثبت نام</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;