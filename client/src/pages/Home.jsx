import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useSwipeable } from 'react-swipeable';
import im1 from '../assets/jv2.png';
import im2 from '../assets/ren1.png';
import im3 from '../assets/de1.png';
import About from './About';
import Expertise from './expertise';

export default function Home() {
  const slides = [{ url: im3 }, { url: im2 }, { url: im1 }];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (index) => setCurrentIndex(index);
  
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  
  return (
    <div className='h-full min-h-screen bg-[#fffff6]'>
      <div
        {...swipeHandlers}
        className='h-[780px] w-full m-auto py-4 px-2 relative group'
      >
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
        >
          {/* Slide 1 - Building image - Right side, white text */}
          {currentIndex === 0 && (
            <div className='absolute top-1/3 right-7 md:right-16 text-right max-w-md'>
              <h2 className='text-2xl md:text-4xl lg:text-6xl text-white font-black leading-tight px-4' 
                  style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', fontWeight: '900' }}>
                Durai Enclave<br />
                Completed & Handed over<br />
                Successfully
              </h2>
            </div>
          )}
          
          {/* Slide 2 - Renovation image - Center-left, black text */}
          {currentIndex === 1 && (
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center'>
              <h2 className='text-2xl md:text-4xl lg:text-6xl text-black font-black px-4' 
                  style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', fontWeight: '900' }}>
                We do Renovations
              </h2>
            </div>
          )}
          
          {/* Slide 3 - Joint ventures image - Right side, white text */}
          {currentIndex === 2 && (
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center'>
              <h2 className='text-2xl md:text-4xl lg:text-6xl text-white font-black leading-tight px-4' 
                  style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', fontWeight: '900' }}>
                we do joint ventures
              </h2>
            </div>
          )}
        </div>
        {/* Left Arrow */}
        <div className='absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer md:group-hover:block md:hidden block'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer md:group-hover:block md:hidden block'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                currentIndex === slideIndex ? 'text-black' : 'text-gray-400'
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      
      <a href="https://wa.me/9380007995?text=I'm%20looking%20for%20a%20flat%20for%20sale">
        <div className="fixed bg-everglade bottom-0 rounded-full text-tuftbush text-base left-0 p-4 m-10 flex flex-row w-auto align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488z"/>
          </svg>
          <p className="flex-none pt-[0.1rem]">Chat on Whatsapp</p>
        </div>
      </a>
      
      <Expertise />
      <About />
    </div>
  );
}