import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useSwipeable } from 'react-swipeable';
import im1 from '../assets/jv.png';
import im2 from '../assets/ren.png';
import im3 from '../assets/de.png';
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
        className='h-[780px] w-full m-auto py-16 px-2 relative group'
      >
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>

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
            className="h-10 w-10 px-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946..." />
          </svg>
          <p className="flex-none pt-[0.4rem]">Chat on Whatsapp</p>
        </div>
      </a>

      <Expertise />
      <About />
    </div>
  );
}
