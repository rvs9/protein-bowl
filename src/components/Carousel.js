// src/components/Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/carousel-background.webp";
import image2 from "../images/carousel-background2.webp";
import mobileImage1 from "../images/carousel1-mob.jpg";
import mobileImage2 from "../images/carousel2-mob.jpg";

const Carousel = () => {
  const carouselImages = [
    { desktop: image1, mobile: mobileImage1 },
    { desktop: image2, mobile: mobileImage2 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="overflow-hidden mt-10 relative">
      <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}>
        <Slider {...settings} className="w-full">
          {carouselImages.map((images, index) => (
            <div key={index} className="w-full relative">
              {/* Image */}
              <img
                src={window.innerWidth > 768 ? images.desktop : images.mobile}
                alt={`Carousel ${index}`}
                className="w-full h-auto"
                style={{ margin: 0, padding: 0 }}
              />
              {/* Heading and Paragraph (conditional rendering for the first image) */}
              {index === 0 && (
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4">
                      <span className="block whitespace-nowrap overflow-hidden overflow-ellipsis">
                        WHERE NUTRITION
                      </span>
                      <span className="block whitespace-nowrap overflow-hidden overflow-ellipsis">
                        TASTES BETTER
                      </span>
                    </h2>
                    <p className="text-gray-100 max-w-sm mx-auto mt-2">
                      At Protein Bowl creativity meets quality. Healthy food is
                      not boring and expensive anymore. What are you ordering?
                    </p>
                  </div>
                )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
