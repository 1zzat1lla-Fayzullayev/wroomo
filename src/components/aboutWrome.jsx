import React from "react";
import Wrapper from "../layout/wrapper";

function AboutWrome() {
  return (
    <>
      <Wrapper>
        <div className="flex items-center py-[80px] gap-[40px] flex-col lg:flex-row">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[#171717] text-[30px] font-bold">O Wroomo</h2>
            <p className="text-[16px]">
              Wroomo — маркетплейс для аренды автомобилей, скутеров и мотоциклов
              на Пхукете. Наша платформа объединяет частных владельцев и
              прокатные компании, предоставляя арендаторам широкий выбор
              реального транспорта с фотографиями, описаниями и отзывами.{" "}
            </p>
            <p className="font-semibold">
              Мы не сдаем собственный транспорт — мы соединяем арендаторов с
              владельцами, обеспечивая прозрачные условия аренды и удобство
              бронирования.
            </p>
          </div>
          <div>
            <img src="/aboutWroomo.webp" className="rounded-[12px]" />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default AboutWrome;
