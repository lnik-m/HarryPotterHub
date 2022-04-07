import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slide from "./Slide/Slide";
import { CharacterProps } from "../../interfaces/house.interface";

const Slider = ({ characters }: CharacterProps): JSX.Element => {
  const swiperConfig = {
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
    }
  };

  return (
    <>
      <Swiper initialSlide={0} {...swiperConfig}>
        {characters.map((item, idx) => (
          <div key={item.name + idx}>
            <SwiperSlide>
              <Slide name={item.name} house={item.house} image={item.image} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
