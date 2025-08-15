
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function SearchItem() {
  const navigate = useNavigate();
  
  const hotels = [
    {
      id: 1,
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1",
      title: "Tower Street Apartments",
      distance: "500m from center",
      taxi: "Free airport taxi",
      subtitle: "Studio Apartment with Air conditioning",
      features: "Entire studio • 1 bathroom • 21m² 1 full bed",
      cancel: "Free cancellation",
      price: "$120",
      rate: 8.9,
      rateText: "Excellent",
      reviews: 1234
    },
    {
      id: 2,
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
      title: "Comfort Suites Airport",
      distance: "1.2km from center",
      taxi: "Paid airport shuttle",
      subtitle: "Deluxe Double Room",
      features: "2 double beds • 2 bathrooms • 45m²",
      cancel: "Free cancellation",
      price: "$140",
      rate: 9.3,
      rateText: "Wonderful",
      reviews: 892
    },
    {
      id: 3,
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1",
      title: "Four Seasons Hotel",
      distance: "300m from center",
      taxi: "Free airport taxi",
      subtitle: "Executive Suite",
      features: "1 bedroom • 1 living room • 2 bathrooms • 65m²",
      cancel: "Free cancellation",
      price: "$320",
      rate: 9.8,
      rateText: "Exceptional",
      reviews: 2456
    },
    {
      id: 4,
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323b90810a6e8a526a1d5f8a1e9511b4309a8d93fc71182d5d8f0c1e6f6c77&o=&s=1",
      title: "Hilton Garden Inn",
      distance: "800m from center",
      taxi: "Paid airport shuttle",
      subtitle: "Standard King Room",
      features: "1 king bed • 1 bathroom • 32m²",
      cancel: "Non-refundable",
      price: "$180",
      rate: 8.5,
      rateText: "Very Good",
      reviews: 765
    },
    {
      id: 5,
      image: "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=3fffe63a365fd0ccdc9a9b14c1c8b8c9e935a1a3d3f3af6b0b0c7a1a2f6d5d5&o=&s=1",
      title: "Radisson Blu Hotel",
      distance: "1.5km from center",
      taxi: "Free airport taxi",
      subtitle: "Business Double Room",
      features: "1 double bed • 1 bathroom • 28m²",
      cancel: "Free cancellation",
      price: "$210",
      rate: 9.1,
      rateText: "Excellent",
      reviews: 1342
    }
  ];

  const handleHotelClick = (hotelId) => {
    navigate(`/hotel/${hotelId}`);
  };

  return (
    <div className="space-y-6 p-4 max-w-7xl mx-auto">
      {hotels.map((hotel) => (
        <article 
          key={hotel.id}
          className="flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer bg-white"
          onClick={() => handleHotelClick(hotel.id)}
          aria-label={`View details for ${hotel.title}`}
        >
          <figure className="w-full md:w-64 h-56 md:h-auto flex-shrink-0">
            <img
              src={hotel.image}
              alt={hotel.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
          
          <div className="flex-1 p-4 flex flex-col">
            <header className="flex justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{hotel.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{hotel.distance}</p>
                <p className="text-sm text-green-600 font-medium mt-1">{hotel.taxi}</p>
              </div>
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold flex items-center h-fit">
                {hotel.rate}
              </div>
            </header>
            
            <p className="text-blue-600 font-medium mt-3">{hotel.subtitle}</p>
            <p className="text-sm text-gray-700 mt-2">{hotel.features}</p>
            <p className={`text-sm font-medium mt-3 ${hotel.cancel === 'Non-refundable' ? 'text-red-600' : 'text-green-600'}`}>
              {hotel.cancel}
            </p>
          </div>
          
          <aside className="w-full md:w-56 p-4 bg-gray-50 flex flex-col justify-between">
            <div className="flex justify-between items-end">
              <div className="text-gray-500 text-sm">1 night, 2 adults</div>
              <div>
                <span className="text-gray-500 text-sm line-through mr-1">$150</span>
                <span className="text-2xl font-bold">{hotel.price}</span>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-1 text-right">
              {hotel.rateText} · {hotel.reviews.toLocaleString()} reviews
            </div>
            <button 
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/hotel/${hotel.id}`);
              }}
            >
              See availability
            </button>
          </aside>
        </article>
      ))}
    </div>
  );
}

SearchItem.propTypes = {
  // Add any props if needed in the future
};

export default SearchItem;