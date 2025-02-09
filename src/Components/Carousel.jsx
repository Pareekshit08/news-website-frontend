import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackCarousel = () => {
  const feedbacks = [
    { name: "Alice", feedback: "Amazing platform! Highly recommended." },
    { name: "Bob", feedback: "Great experience, user-friendly interface!" },
    { name: "Charlie", feedback: "Customer support was excellent." },
    { name: "Diana", feedback: "I loved the seamless navigation!" },
    { name: "Eve", feedback: "A must-try for everyone. Kudos to the team!" },
    { name: "Frank", feedback: "Fantastic service, very responsive!" },
    { name: "Grace", feedback: "Easy to use and very reliable." },
    { name: "Hank", feedback: "This platform solved all my issues in no time!" },
    { name: "Ivy", feedback: "User-friendly and well-designed. Loved it!" },
    { name: "Jake", feedback: "Highly professional and efficient service!" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div className="feedback-carousel">
      <h2 className="carousel-title">User Feedback</h2>
      <Slider {...settings}>
        {feedbacks.map((item, index) => (
          <div key={index} className="feedback-slide">
            <p className="feedback-text">"{item.feedback}"</p>
            <h5 className="feedback-author">- {item.name}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackCarousel;
