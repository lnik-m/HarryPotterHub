import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slide from "./Slide/Slide";
import { CharacterProps } from "../../interfaces/house.interface";

const Slider = ({ characters }: CharacterProps): JSX.Element => {
  return (
    <div>
      <Swiper slidesPerView={3} initialSlide={0}>
        {characters.map((item, idx) => (
          <div key={idx}>
            <SwiperSlide>
              <Slide name={item.name} house={item.house} image={item.image} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
