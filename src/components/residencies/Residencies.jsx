import "./residencies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../utils/slider.json";

const Residencies = () => {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="brownText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper className="swipper">
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="residency" />
                <span className="secondaryText r-price">
                  <span style={{ color: "brown" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;
