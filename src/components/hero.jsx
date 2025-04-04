import React, { useEffect, useRef } from "react";
import Wrapper from "../layout/wrapper";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; 



function Hero() {
  const calendarRef = useRef();

  useEffect(() => {
    if (calendarRef.current) {
      flatpickr(calendarRef.current, {
        mode: "range",
        dateFormat: "Y-m-d",
        rangeSeparator: " — ",
        position: "below"

      });
    }
  }, []);
  return (
    <>
      <div className="hero">
        <Wrapper>
          <div className="flex flex-col text-white">
            <h2 className="text-[40px] leading-[48px] font-bold">
              Арендуйте транспорт <br /> для вашего идеального отдыха
            </h2>
            <p className=" mt-[20px]">
              Прозрачные условия, безопасные платежи и только реальный транспорт
              от проверенных прокатных компаний и частных владельцев!
            </p>

            <div className="bg-white p-[20px] rounded-[8px] mt-[40px] flex items-end gap-[12px]">
              <div className="text-black flex flex-col gap-[4px] w-full">
                <span className="text-[#737373] font-[600]">
                  Вид транспорта
                </span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 rounded-[8px] border border-[#e5e5e5] py-[12px] pr-[12px] pl-[12px] transition-all ease-in-out hover:border-[#f04438] cursor-pointer">
                    <img src="/filter_card_logo.svg" />
                    <span>Авто</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-[8px] border border-[#e5e5e5] py-[12px] pr-[12px] pl-[12px] transition-all ease-in-out hover:border-[#f04438] cursor-pointer">
                    <img src="/filter_moto_logo.svg" />
                    <span>Мото</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[4px] w-full">
                <span className="text-[#737373] font-[600]">Место</span>
                <div className="flex items-center h-[48px] gap-[4px] overflow-hidden p-[12px] rounded-[8px] border border-[#e5e5e5] bg-inherit text-[#171717]  w-full opacity-[.5]">
                  <input
                    disabled=""
                    type="text"
                    placeholder=""
                    aria-label=""
                    maxlength="128"
                    value="Phuket, Thailand"
                    className="outline-none border-none w-full"
                  />
                  <img src="/filter_location_logo.svg" />
                </div>
              </div>

              <div className="flex flex-col gap-[4px] w-full">
                <span className="text-[#737373] font-[600]">Период</span>
                <input
                  ref={calendarRef}
                  type="text"
                  placeholder="Выберите даты"
                  className="flex items-center h-[48px] gap-[4px] overflow-hidden p-[12px] rounded-[8px] border border-[#e5e5e5] bg-inherit text-[#171717] w-full"
                />
              </div>

              <button className="px-[24px] py-[12px] text-[16px] font-[600] bg-[#f04438] rounded-[8px] whitespace-nowrap">
                Поиск
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default Hero;
