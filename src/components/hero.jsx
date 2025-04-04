import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../layout/wrapper";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Russian } from "flatpickr/dist/l10n/ru.js";

function Hero() {
  const calendarRef = useRef();
  const [isDateSelected, setIsDateSelected] = useState(false);

  useEffect(() => {
    if (calendarRef.current) {
      flatpickr(calendarRef.current, {
        mode: "range",
        dateFormat: "Y-m-d",
        rangeSeparator: " — ",
        position: "below",
        locale: {
          rangeSeparator: " — ",
        },
        onChange: function (selectedDates) {
          if (selectedDates.length > 0) {
            setIsDateSelected(true);
          } else {
            setIsDateSelected(false);
          }
        },
      });
    }
  }, []);
  return (
    <>
      <div className="hero">
        <Wrapper>
          <div className="flex flex-col text-white">
            <h2 className="text-[29px] leading-[40px] md:text-[40px] md:leading-[48px] font-bold">
              Арендуйте транспорт <br /> для вашего идеального отдыха
            </h2>
            <p className=" mt-[20px] max-w-[600px]">
              Прозрачные условия, безопасные платежи и только реальный транспорт
              от проверенных прокатных компаний и частных владельцев!
            </p>

            <div className="bg-white p-[20px] rounded-[8px] mt-[40px] flex flex-col lg:items-end gap-[12px] lg:flex-row">
              <div className="text-black flex flex-col gap-[4px] flex-[0_0_auto]">
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
                    disabled
                    type="text"
                    placeholder=""
                    aria-label=""
                    maxLength="128"
                    value="Phuket, Thailand"
                    className="outline-none border-none w-full select-none"
                  />
                  <img src="/filter_location_logo.svg" />
                </div>
              </div>

              <div className="flex flex-col gap-[4px] w-full">
                <span className="text-[#737373] font-[600]">Период</span>
                <div
                  className={`flex items-center h-[48px] overflow-hidden rounded-[8px] bg-inherit text-[#171717] relative w-full ${
                    isDateSelected ? "" : "opacity-[.5]"
                  }`}
                >
                  <input
                    ref={calendarRef}
                    type="text"
                    placeholder="Выберите даты"
                    className="flex items-center h-[48px] gap-[4px] overflow-hidden p-[12px] rounded-[8px] border border-[#e5e5e5] bg-inherit text-[#171717] w-full outline-none"
                  />
                  <img
                    src="/filter_date_logo.svg"
                    className="absolute right-[15px]"
                  />
                </div>
              </div>

              <button className="px-[24px] py-[12px] text-[16px] font-[600] bg-[#f04438] rounded-[8px] whitespace-nowrap transition-all ease-in-out hover:opacity-[.8] cursor-pointer">
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
