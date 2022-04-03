import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slide from "./Slide/Slide";
import styles from "./Slider.module.scss";
import { CharacterProps } from '../../interfaces/house.interface';

const Slider = ({ characters }: CharacterProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
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
    </div>
  );
};

export default Slider;
