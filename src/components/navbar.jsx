/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  return (
    <>
      <header className="bg-[#171717] fixed z-[1000] text-white w-full px-[22px] py-[16px] lg:px-[60px] lg:py-[12px] shadow-[7px 16px 18px 0 rgba(35, 35, 39, .03);] top-0 left-0">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-[40px]">
            <img src="/logo.svg" alt="Logo" className="w-[154px]" />
            <div class="items-center gap-[15px] text-[#fdfdfd] hidden md:flex">
              <a href="#">Найти транспорт</a>
              <a href="#">Места</a>
              <a href="#">Новости</a>
              <a href="#">Блог</a>
              <a href="#">О нас</a>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className=" rounded-[5px] ">
              {!isLoggedIn ? (
                <div className="flex gap-3 items-center">
                  <select className="outline-none hidden lg:block border border-[#262626] rounded-[5px] py-[8px] appearance-none px-2 cursor-pointer">
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                  </select>
                  <div className="min-h-[100%] w-[1.5px] h-[44px] bg-[#262626] hidden lg:block"></div>
                  <button className="px-[12px] py-[8px] border border-white rounded-[5px] hidden lg:block text-[14px] cursor-pointer transition-all ease-in-out hover:opacity-80">
                    <strong>Сдать транспорт</strong>
                  </button>
                  <button className="border-none bg-white text-black px-[12px] py-[8px] rounded-[5px] text-[14px] font-semibold cursor-pointer transition-all ease-in-out hover:opacity-80">
                    Войти
                  </button>
                </div>
              ) : (
                <div className="flex gap-3 items-center">
                  <button className="px-[12px] py-[8px] border border-white rounded-[5px] hidden lg:block text-[14px] cursor-pointer transition-all ease-in-out hover:opacity-80">
                    <strong>Сдать транспорт</strong>
                  </button>
                  <div className="min-h-[100%] w-[1.5px] h-[44px] bg-[#262626] hidden lg:block"></div>
                  <select className="outline-none hidden lg:block border border-[#262626] rounded-[5px] py-[8px] appearance-none px-2 cursor-pointer">
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                  </select>
                  <div className="flex gap-3 px-[12px] py-[6px] cursor-pointer bg-[#262626] rounded-[5px]">
                    <img src="/hamburger.svg" alt="" />
                    <img
                      src="/avatar.svg"
                      alt=""
                      className="rounded-[50%] w-[30px] "
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
