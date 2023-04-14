import logo1 from "../assets/banniereLogo/logo22.png";
import logo2 from "../assets/banniereLogo/logo22.png";
import logo3 from "../assets/banniereLogo/logo22.png";
import logo4 from "../assets/banniereLogo/logo22.png";
import logo5 from "../assets/banniereLogo/logo22.png";
import { SocialLinks } from "../components/SocialLinks";
import { Fragment } from "react";

const logos = [logo1, logo2, logo3, logo4, logo5];

const Banniere = () => {
  return (
    <Fragment>
      <div className="bg-gray-500 opacity-70 py-4 mt-40 h-80">
        <h1 className="text-white text-center mt-1 font-bold ">
          " Il nous ont fait confiance "
        </h1>
        <h4 className="text-white ml-20"> Nos partenaires :</h4>
        <div className="container place-items-center px-4 mt-45">
          <div className=" grid  place-items-center h-5 ... ">
            <div className="flex">{<RenderLogos />}</div>
          </div>
        </div>
      </div>
      <SocialLinks />
    </Fragment>
  );
};

const RenderLogos = () => {
  return (
    <Fragment>
      {logos.map((logo, i) => (
        <div className="align-items-center" key={i}>
          <img
            className="h-20 w-auto mr-8 mt-10 center"
            src={logo}
            alt={`${i}`}
          />
        </div>
      ))}
    </Fragment>
  );
};

export default Banniere;
