import React, { useState, useEffect, useRef } from 'react';

interface Props {
  text: string;
}

const AnimationTexte: React.FC<Props> = ({ text }) => {
  // convertir le texte en un tableau de caractères
  const chars = text.split('');
  // initialiser l'index à 0 en utilisant useRef
  const index = useRef(0);
  // initialiser l'état currentText à une chaîne vide
  const [currentText, setCurrentText] = useState('');
  // initialiser l'état isVisible à false
  const [isVisible, setIsVisible] = useState(false);
  // initialiser une référence à un objet IntersectionObserver
  const observer = useRef<IntersectionObserver | null>(null);
  // initialiser une référence à un élément DOM
  const targetRef = useRef<HTMLDivElement>(null);

  // utiliser useEffect pour créer un objet IntersectionObserver et observer l'élément cible
  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting) });
    observer.current.observe(targetRef.current!);

    // retourner une fonction de nettoyage pour disconnect l'IntersectionObserver lorsque le composant est démonté
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  // utiliser useEffect pour incrémenter l'index et ajouter un caractère à currentText toutes les 50 millisecondes si l'élément cible est visible et l'index est inférieur à la longueur du tableau de caractères
  useEffect(() => {
    if (isVisible && index.current < chars.length) {
      const timerId = setTimeout(() => {
        setCurrentText((value) => value + chars[index.current]);
        index.current += 1;
      }, 50);
      return () => clearTimeout(timerId);
    }
  }, [isVisible, chars]);

  // utiliser useEffect pour afficher le texte complet une fois que tous les caractères ont été ajoutés à currentText
  useEffect(() => {
    if (index.current >= chars.length) {
      setCurrentText(chars.join(''));
    }
  }, [chars]);

  // retourner un élément div contenant le texte actuel, avec une référence pour l'IntersectionObserver
  return (
    <div className='font-mono' ref={targetRef}>
      {currentText}
    </div>
  );
};

export default AnimationTexte;