// Courses.jsx
import "./Courses.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ai from "../../assets/ai.jpg";
import ml from "../../assets/ml.jpg";
import uiux from "../../assets/uiux.jpeg";
import webdesign from "../../assets/webdesign.jpg";

const Courses = () => {
  const courseData = [
    { img: ai, label: "AI" },
    { img: ml, label: "ML" },
    { img: uiux, label: "UI/UX" },
    { img: webdesign, label: "Web Design" },
  ];

  return (
    <section className="courses_wrapper">
      <div className="heading">
        <div>Choose favourite course from top categories</div>
        <div>See All</div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {courseData.map((course, i) => (
          <SwiperSlide key={i}>
            <img src={course.img} alt={course.label} />
            <div className="overflow">{course.label}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Courses;
