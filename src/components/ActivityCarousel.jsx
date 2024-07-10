import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation } from "swiper/modules";
import ActivityList from "./ActivityList";
import ActivityDetails from "./ActivityDetails";
import ActivityUpdate from "./ActivityUpdate";
import ActivityDelete from "./ActivityDelete";
import ActivityCreate from "./ActivityCreate";

const ActivityCarousel = () => {
  return (
    <>
      <section className="flex flex-col">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
            "--swiper-navigation-size": "20px",
          }}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="h-[500px] w-[80%] rounded-md bg-white text-black"
        >
          <SwiperSlide>
            <ActivityCreate />
          </SwiperSlide>

          <SwiperSlide>
            <ActivityList />
          </SwiperSlide>

          <SwiperSlide>
            <ActivityDetails />
          </SwiperSlide>

          <SwiperSlide>
            <ActivityUpdate />
          </SwiperSlide>

          <SwiperSlide>
            <ActivityDelete />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default ActivityCarousel;
