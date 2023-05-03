
import "../style/index.css";
import "../style/Caroussel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import useMedia from "use-media";
import Slider from "react-slick";
import bigImage1 from '../assets/carouselimg/image-product-1.jpg';
import bigImage2 from '../assets/carouselimg/image-product-2.jpg';
import bigImage3 from '../assets/carouselimg/image-product-3.jpg';
import bigImage4 from '../assets/carouselimg/image-product-4.jpg';
import miniImage1 from '../assets/carouselimg/image-product-1-thumbnail.jpg';
import miniImage2 from '../assets/carouselimg/image-product-2-thumbnail.jpg';
import miniImage3 from '../assets/carouselimg/image-product-3-thumbnail.jpg';
import miniImage4 from '../assets/carouselimg/image-product-4-thumbnail.jpg';


export  const Carousel = () => {
  const bigImages = [
    bigImage1,
    bigImage2,
    bigImage3,
    bigImage4
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  const miniImages = [
    miniImage1,
    miniImage2,
    miniImage3,
    miniImage4
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const isSmallScreen = useMedia("(max-width: 985px)");


  return (
    <>
      {isSmallScreen ? (
        <Slider {...settings}>
          <div className="images-container">
            <div className="big-image">
              <figure>

                <img src={bigImages[0]} alt="shoes" />
              </figure>
            </div>
          </div>
          <div className="images-container">
            <div className="big-image">
              <img src={bigImages[1]} alt="shoes " />
            </div>
          </div>
          <div className="images-container">
            <div className="big-image">
              <img src={bigImages[2]} alt="shoes" />
            </div>
          </div>
          <div className="images-container">
            <div className="big-image">
              <img src={bigImages[3]} alt="shoes " />
            </div>
          </div>
        </Slider>
      ) : (
        <div className="images-container">
          <a href="/" className="big-image">
            <img src={bigImages[selectedImage]} alt="product shoes" />
          </a>
        </div>
      )}

      <div className="mini-images-container">
        {miniImages.map((item, index) =>
          index === selectedImage ? (
            <div
            key={index}
              onClick={() => setSelectedImage(index)}
              className="mini-images"
              style={{
                border: "3px solid hsl(26, 100%, 55%)",
                borderRadius: "13px",
                padding: "0",
              }}
            >
              <img
                alt="mini  product"
                src={item}
                style={{
                  maxHeight: "90px",
                  maxWidth: "90px",
                  borderRadius: "8px",
                  opacity: "0.70",
                }}
              />
            </div>
          ) : (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="mini-images"
            >
              <img
                alt="mini product"
                src={item}
                style={{
                  maxHeight: "90px",
                  maxWidth: "90px",
                  borderRadius: "8px",
                }}
              />
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Carousel;