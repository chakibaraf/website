import React, { useEffect, useRef, useState } from 'react';

interface AnimationButtonProps {
  delay?: number;
  children: React.ReactNode;
  onClick?: () => void;
}

const AnimationButton: React.FC<AnimationButtonProps> = ({ delay = 0, children, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const buttonElement = buttonRef.current;

      if (buttonElement) {
        const buttonPosition = buttonElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (buttonPosition.top < viewportHeight && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      style={{ transform: isVisible ? 'scale(1)' : 'scale(0.5)', transition: `transform ${delay}s` }}
      className="mr-2 px-8 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
    >
      {children}
    </button>
  );
};

export default AnimationButton;