


import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import image1 from "../assets/slider/batiment.jpg";
import image2 from "../assets/slider/securityguard.jpg";

import image3 from "../assets/slider/sante2.jpg";
import image4 from "../assets/slider/restauration.jpg";


const images = [
  image1,
  image2,
  image3,
  image4,
];

const ImagePresentation: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  //fonction qui permet de map mon tableau d'image
  const renderImages = () => {
    return images.map((image, i) => (
      <Carousel.Item key={i}>
        <img className="d-block w-100" src={image} alt={`Slide ${i}`} />
      </Carousel.Item>
    ));
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      {renderImages()}
    </Carousel>
  );
};

export default ImagePresentation;


   /* <div>
        <h1 className='mt-3'> GMA INTERNATIONAL</h1>
         <figure>

         <img src={import1} className='imgAccueil scale-75 mt-8 object-cover h-100 w-150 ...' alt='accueil'></img>
         </figure>
    </div>*/