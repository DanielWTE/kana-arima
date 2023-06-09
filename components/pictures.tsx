"use client";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import pic10 from '../public/images/pic10.png';
import pic11 from '../public/images/pic11.png';
import pic12 from '../public/images/pic12.png';
import pic13 from '../public/images/pic13.png';
import pic14 from '../public/images/pic14.png';
import pic15 from '../public/images/pic15.png';
import pic16 from '../public/images/pic16.png';
import pic17 from '../public/images/pic17.png';
import pic18 from '../public/images/pic18.png';
import Image from 'next/image';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        // @ts-ignore
        width: window.innerWidth,
        // @ts-ignore
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const Pictures = () => {
  const images = [pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState({});
  const size = useWindowSize();

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  // @ts-ignore
  const handleImageLoad = (index) => {
    setIsLoaded(prevState => ({...prevState, [index]: true}));
  };

  const getSlides = () => {
    // @ts-ignore
    const numSlides = size.width <= 640 ? 1 : 3;
    let slides = [];
    for(let i=0; i<numSlides; i++) {
      slides.push((currentIndex + i) % images.length);
    }
    return slides;
  };

  return (
    <div className="container bg-red-500 rounded-lg mx-auto mb-10 px-4 py-4 md:py-8 h-full">
      <h1 className="text-5xl font-bold mb-4 text-white md:mb-6 text-center md:text-left">Pictures</h1>
      <div className="flex items-center overflow-x-hidden">
        <button onClick={prevSlide} className="text-white mr-4"><FontAwesomeIcon icon={faArrowLeft} /></button>
        {getSlides().map(index => (
          <div className="opacity-100 transition-opacity duration-1000 px-2 relative" key={index} style={{ width: '512px', height: '288px' }}>
            {/* @ts-ignore */}
            {!isLoaded[index] && 
              <div className="absolute inset-0 flex items-center justify-center">
                <FontAwesomeIcon icon={faCircleNotch} className="animate-spin text-4xl text-red-200" />
              </div>
            }
            <Image 
              src={images[index]}
              alt="Picture" 
              className="h-full w-full object-cover"
              onLoad={() => handleImageLoad(index)}
              /* @ts-ignore */
              style={{visibility: isLoaded[index] ? 'visible' : 'hidden'}}
            />
          </div>
        ))}
        <button onClick={nextSlide} className="text-white ml-4"><FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>
  );
};

export default Pictures;