/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../layout/wrapper";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfileDropdown, setUserProfileDropdown] = useState(false);
  const [mobileScreen, setMobileScreen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleOpenDropdown = () => {
    setUserProfileDropdown(!userProfileDropdown);
    setMobileScreen(!mobileScreen);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setUserProfileDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  let year = new Date().getFullYear();

  return (
    <div>
      <header className="bg-[#171717] fixed z-[999] text-white w-full px-[22px] py-[16px] lg:px-[60px] lg:py-[12px] shadow-[7px_16px_18px_0_rgba(35,35,39,.03)] top-0 left-0">
        <Wrapper>
          <nav className="flex items-center justify-between relative">
            <div className="flex items-center gap-[40px]">
              <img src="/logo.svg" alt="Logo" className="w-[154px]" />
              <div className="items-center gap-[20px] text-[#fdfdfd] hidden md:flex text-[14px]">
                <a href="#">Найти транспорт</a>
                <a href="#">Места</a>
                <a href="#">Новости</a>
                <a href="#">Блог</a>
                <a href="#">О нас</a>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="rounded-[5px]">
                {isLoggedIn ? (
                  <div className="flex gap-3 items-center">
                    <select className="outline-none hidden lg:block border border-[#262626] rounded-[5px] py-[8px] px-2 appearance-none cursor-pointer">
                      <option value="ru" className="text-black">RU</option>
                      <option value="en" className="text-black">EN</option>
                    </select>
                    <div className="min-h-[100%] w-[1.5px] h-[44px] bg-[#262626] hidden lg:block"></div>
                    <button className="px-[12px] py-[8px] border border-white rounded-[5px] hidden lg:block text-[14px] cursor-pointer transition-all hover:opacity-80">
                      <strong>Сдать транспорт</strong>
                    </button>
                    <button className="border-none bg-white text-black px-[12px] py-[8px] rounded-[5px] text-[14px] font-semibold cursor-pointer transition-all hover:opacity-80">
                      Войти
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3 items-center">
                    <button className="px-[12px] py-[8px] border border-white rounded-[5px] hidden lg:block text-[14px] cursor-pointer transition-all hover:opacity-80">
                      <strong>Сдать транспорт</strong>
                    </button>
                    <div className="min-h-[100%] w-[1.5px] h-[44px] bg-[#262626] hidden lg:block"></div>
                    <select className="outline-none hidden lg:block border border-[#262626] rounded-[5px] py-[8px] px-2 appearance-none cursor-pointer">
                      <option value="ru" className="text-black">RU</option>
                      <option value="en" className="text-black">EN</option>
                    </select>
                    <div
                      className="flex gap-3 px-[12px] py-[6px] cursor-pointer bg-[#262626] rounded-[5px]"
                      onClick={handleToggleOpenDropdown}
                    >
                      <img src="/hamburger.svg" alt="Menu" />
                      <img
                        src="/avatar.svg"
                        alt="Avatar"
                        className="rounded-[50%] w-[30px]"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {userProfileDropdown && (
              <div
                className="absolute hidden lg:block top-[60px] right-[-8px] bg-[#171717] rounded-[8px]"
                ref={dropdownRef}
              >
                <ul>
                  <li className="px-6 py-3 transition-all hover:bg-[#ffffff33]">
                    <a href="#" className="flex items-center gap-2">
                      <img src="/car.svg" alt="" />
                      <span className="text-[14px] font-[600] w-full">
                        Бронирования
                      </span>
                    </a>
                  </li>
                  <li className="px-6 py-3 transition-all hover:bg-[#ffffff33]">
                    <a href="#" className="flex items-center gap-2">
                      <img src="/settings.svg" alt="" />
                      <span className="text-[14px] font-[600] w-full">
                        Профиль
                      </span>
                    </a>
                  </li>
                  <li className="px-6 py-3 transition-all hover:bg-[#ffffff33]">
                    <a href="#" className="flex items-center gap-2">
                      <img src="/support.svg" alt="" />
                      <span className="text-[14px] font-[600] w-full">
                        Поддержка
                      </span>
                    </a>
                  </li>
                  <li className="px-6 py-3 transition-all hover:bg-[#ffffff33] border-t border-t-white">
                    <a href="#" className="flex items-center gap-2">
                      <img src="/logout.svg" alt="" />
                      <span className="text-[14px] font-[600] w-full">
                        Выйти
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {mobileScreen && (
              <div className="bg-[#171717] lg:hidden h-screen w-full fixed top-0 left-0 z-[99] ">
                <div className="flex items-center gap-[40px] px-[22px] py-[26px] lg:px-[60px] lg:py-[12px]">
                  <img src="/logo.svg" alt="Logo" className="w-[154px]" />
                  <div className="items-center gap-[20px] text-[#fdfdfd] hidden md:flex text-[14px]">
                    <a href="#">Найти транспорт</a>
                    <a href="#">Места</a>
                    <a href="#">Новости</a>
                    <a href="#">Блог</a>
                    <a href="#">О нас</a>
                  </div>
                </div>
                <button
                  onClick={handleToggleOpenDropdown}
                  className="absolute top-5 right-5 text-white text-3xl"
                >
                  ✕
                </button>

                <div className="px-[16px] flex flex-col gap-[20px]">
                  <div className="bg-[#262626] rounded-[12px]">
                    <ul>
                      <li>
                        <div className="flex items-center gap-3 px-6 py-5">
                          <img
                            src="/avatar.svg"
                            alt="Avatar"
                            className="rounded-[50%] "
                          />
                          <span className="text-[16px] font-bold">Test</span>
                        </div>
                      </li>
                      <li className="px-6 py-4 transition-all hover:bg-[#ffffff33]">
                        <a href="#" className="flex items-center gap-2">
                          <img src="/car.svg" alt="" />
                          <span className="text-[16px] font-[600] w-full">
                            Бронирования
                          </span>
                        </a>
                      </li>
                      <li className="px-6 py-4 transition-all hover:bg-[#ffffff33] border-t border-t-[#2e3638]">
                        <a href="#" className="flex items-center gap-2">
                          <img src="/settings.svg" alt="" />
                          <span className="text-[16px] font-[600] w-full">
                            Профиль
                          </span>
                        </a>
                      </li>
                      <li className="px-6 py-4 transition-all hover:bg-[#ffffff33] border-t border-t-[#2e3638]">
                        <a href="#" className="flex items-center gap-2">
                          <img src="/support.svg" alt="" />
                          <span className="text-[16px] font-[600] w-full">
                            Поддержка
                          </span>
                        </a>
                      </li>
                      <li className="px-6 py-4 transition-all hover:bg-[#ffffff33] border-t border-t-[#2e3638]">
                        <a href="#" className="flex items-center gap-2">
                          <img src="/logout.svg" alt="" />
                          <span className="text-[16px] font-[600] w-full">
                            Выйти
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#262626] rounded-[12px]">
                    <ul>
                      <li className="px-6 py-4 transition-all hover:bg-[#ffffff33]">
                        <a href="#" className="flex items-center gap-2">
                          <span className="text-[16px] font-[600] w-full">
                            Найти транспорт
                          </span>
                        </a>
                      </li>
                      <li className="px-6 py-4 transition-all hover:bg-[#ffffff33] border-t border-t-[#2e3638]">
                        <a href="#" className="flex items-center gap-2">
                          <span className="text-[16px] font-[600] w-full">
                            Места
                          </span>
                        </a>
                      </li>
                      <li className="px-6 py-4 transition-all hover:bg-[#ffffff33] border-t border-t-[#2e3638]">
                        <a href="#" className="flex items-center gap-2">
                          <span className="text-[16px] font-[600] w-full">
                            Новости
                          </span>
                        </a>
                      </li>
                      <li className="px-6 py-4 transition-all hover:bg-[#ffffff33] border-t border-t-[#2e3638]">
                        <a href="#" className="flex items-center gap-2">
                          <span className="text-[16px] font-[600] w-full">
                            Блог
                          </span>
                        </a>
                      </li>
                      <li className="px-6 py-4 transition-all hover:bg-[#ffffff33] border-t border-t-[#2e3638]">
                        <a href="#" className="flex items-center gap-2">
                          <span className="text-[16px] font-[600] w-full">
                            О нас
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <button className="px-[12px] py-[8px] border border-white rounded-[5px] text-[14px] cursor-pointer transition-all hover:opacity-80">
                    <strong>Сдать транспорт</strong>
                  </button>

                  <div className="bg-[#262626] rounded-[12px]">
                    <div className="px-6 py-6">
                      <select className="outline-none appearance-none cursor-pointer">
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                      </select>
                    </div>
                  </div>

                  <span>Copyright © {year} Wroomo. All Rights Reserved.</span>
                </div>
              </div>
            )}
          </nav>
        </Wrapper>
      </header>
    </div>
  );
}

export default Navbar;
