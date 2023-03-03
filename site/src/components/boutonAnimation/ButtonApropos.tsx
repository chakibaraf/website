import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimationButton from './AnimationBouton';

export const ButtonApropos = () => {
  const navigate = useNavigate();

  /**
   * fonction qui permet de naviguer avec soit le bouton À propos ou contact
   * si je clic sur bouton apropos alors redirige vers page apropos sinon vers
   * contact
   */
  const handleClick = (destination: string) => {
    destination === 'page1' ? navigate('/apropos') : navigate('/contact');
  };

  return (
    <div className="flex justify-center mt-20  ">
      <AnimationButton delay={3} onClick={() => handleClick('page1')}>
        À propos
      </AnimationButton>

    

      <AnimationButton delay={3} onClick={() => handleClick('page2')}>
      Contact
      </AnimationButton>
      
    </div>
  );
};

export default ButtonApropos;