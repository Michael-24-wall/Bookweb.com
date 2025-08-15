import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Hotel() {
  const photos = [
    { id: 1, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1" },
    { id: 2, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1" },
    { id: 3, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1" },
    { id: 4, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1" },
    { id: 5, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div className="w-2 h-2 bg-white rounded-full opacity-50 mt-4"></div>
    ),
    appendDots: dots => (
      <div className="bg-black bg-opacity-50 rounded-full p-2">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div 
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 cursor-pointer hover:bg-opacity-100 transition"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faCircleArrowRight} className="text-gray-800 text-xl" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div 
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 cursor-pointer hover:bg-opacity-100 transition"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faCircleArrowLeft} className="text-gray-800 text-xl" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      
      <div className="max-w-6xl mx-auto p-4">
        {/* Image Carousel */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mt-6">
          <Slider {...sliderSettings}>
            {photos.map((photo) => (
              <div key={photo.id} className="relative h-96 w-full">
                <img
                  src={photo.src}
                  alt={`Hotel view ${photo.id}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setIsFullscreen(true)}
                />
              </div>
            ))}
          </Slider>
          
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentSlide + 1} / {photos.length}
          </div>
        </div>

        {/* Fullscreen Carousel */}
        {isFullscreen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center">
            <button 
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setIsFullscreen(false)}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            
            <div className="w-full max-w-4xl h-3/4">
              <Slider {...sliderSettings} initialSlide={currentSlide}>
                {photos.map((photo) => (
                  <div key={`full-${photo.id}`} className="flex items-center justify-center h-full">
                    <img
                      src={photo.src}
                      alt={`Hotel view ${photo.id}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}

        {/* Hotel Info */}
        <div className="flex flex-col md:flex-row justify-between mt-8 gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Shalom Hotel</h1>
            <div className="flex items-center mt-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-red-500 mr-2" />
              <span className="text-gray-600">123 Peace Street, Tel Aviv</span>
            </div>
            <p className="mt-2 text-blue-600 font-medium">Excellent location - 9.8/10! (1,234 reviews)</p>
            <p className="mt-4 text-gray-700">
              Located in the heart of Ngong road in Nairobi, Shalom Hotel offers air-conditioned rooms with free WiFi. 
              The property is close to several noted attractions, about a 12-minute walk from Comboni Road
              Junctiction Mall. The hotel has family rooms. Also rooms that accomodate 3 to 5 guest 
            </p>
          </div>
          
          <div className="w-full md:w-80 bg-blue-100 p-6 rounded-xl flex flex-col gap-4">
            <h3 className="text-xl font-bold">Perfect for a 3-night stay!</h3>
            <p className="text-gray-700">
              Located in the center of Tel Aviv, this property has an excellent location score of 9.8!
            </p>
            <div className="text-3xl font-bold">$120 <span className="text-base font-normal text-gray-600">(1 night)</span></div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition">
              Reserve or Book Now!
            </button>
          </div>
        </div>

        {/* Hotel Details */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Hotel Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Property amenities</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Free WiFi
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Air conditioning
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Airport shuttle
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Family rooms
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Non-smoking rooms
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Room features</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Private bathroom
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Flat-screen TV
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Safe deposit box
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Minibar
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full mr-2">✓</span>
                  Tea/Coffee maker
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;