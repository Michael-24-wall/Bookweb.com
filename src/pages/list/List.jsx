import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import SearchItem from '../../components/searchItem/SearchItem';

export const List = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  
  const [destination, setDestination] = useState(location.state?.destination || "");
  const [date, setDate] = useState(location.state?.date || {
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
  });
  const [options, setOptions] = useState(location.state?.options || {
    adult: 1,
    children: 0,
    room: 1,
  });
  const [showDestinationInput, setShowDestinationInput] = useState(false);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  
  const handleHeaderSearch = (searchData) => {
    setDestination(searchData.destination);
    setDate(searchData.dates[0]); 
    setOptions(searchData.options);
  };

  const handleSearch = () => {
    navigate("/hotels", { 
      state: { 
        destination, 
        date,
        options 
      } 
    });
  };

  const handleStartDateChange = (date) => {
    setDate(prev => ({
      startDate: date,
      endDate: date > prev.endDate ? new Date(date.setDate(date.getDate() + 1)) : prev.endDate
    }));
    setShowStartDatePicker(false);
  };

  const handleEndDateChange = (date) => {
    setDate(prev => ({
      startDate: date < prev.startDate ? new Date(date.setDate(date.getDate() - 1)) : prev.startDate,
      endDate: date
    }));
    setShowEndDatePicker(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* Add onSearch prop here - only change needed in the JSX */}
      <Header type="list" onSearch={handleHeaderSearch} />
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Search Sidebar */}
          <div className="w-full lg:w-80 bg-amber-50 p-4 rounded-xl shadow-md border border-amber-100 sticky top-4 h-fit">
            <h1 className="text-xl font-semibold text-amber-800 mb-4">Search Filters</h1>
            
            {/* Destination Section */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-amber-800 mb-1">Destination</label>
              {showDestinationInput ? (
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where are you going?"
                    className="w-full p-2 text-sm border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button 
                    className="px-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition"
                    onClick={() => setShowDestinationInput(false)}
                  >
                    ✓
                  </button>
                </div>
              ) : (
                <button 
                  className="w-full p-2 bg-white text-sm text-left rounded-lg border border-amber-200 hover:bg-amber-100 transition flex items-center justify-between"
                  onClick={() => setShowDestinationInput(true)}
                >
                  <span>{destination || "Select destination"}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>
            
            {/* Date Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-amber-800 mb-1">Dates</label>
              <div className="grid grid-cols-2 gap-2">
                {/* From Date */}
                <div className="relative">
                  <button 
                    className="w-full p-2 bg-white text-xs rounded-lg border border-amber-200 hover:bg-amber-100 transition flex flex-col"
                    onClick={() => {
                      setShowStartDatePicker(true);
                      setShowEndDatePicker(false);
                    }}
                  >
                    <span className="text-xs text-amber-600">From</span>
                    <span className="font-medium">{format(date.startDate, "MMM dd")}</span>
                  </button>
                  {showStartDatePicker && (
                    <div className="absolute z-20 mt-1 shadow-xl rounded-lg overflow-hidden">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => handleStartDateChange(item.selection.startDate)}
                        moveRangeOnFirstSelection={false}
                        ranges={[{ startDate: date.startDate, endDate: date.startDate, key: 'selection' }]}
                        minDate={new Date()}
                        rangeColors={['#D97706']}
                      />
                    </div>
                  )}
                </div>
                
                {/* To Date */}
                <div className="relative">
                  <button 
                    className="w-full p-2 bg-white text-xs rounded-lg border border-amber-200 hover:bg-amber-100 transition flex flex-col"
                    onClick={() => {
                      setShowEndDatePicker(true);
                      setShowStartDatePicker(false);
                    }}
                  >
                    <span className="text-xs text-amber-600">To</span>
                    <span className="font-medium">{format(date.endDate, "MMM dd")}</span>
                  </button>
                  {showEndDatePicker && (
                    <div className="absolute z-20 mt-1 shadow-xl rounded-lg overflow-hidden">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => handleEndDateChange(item.selection.endDate)}
                        moveRangeOnFirstSelection={false}
                        ranges={[{ startDate: date.endDate, endDate: date.endDate, key: 'selection' }]}
                        minDate={date.startDate}
                        rangeColors={['#D97706']}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Options */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-amber-800 mb-1">Guests & Rooms</label>
              <div className="p-3 bg-white rounded-lg border border-amber-200 grid grid-cols-3 gap-2 text-center">
                <div className="flex flex-col">
                  <span className="text-xs text-amber-600">Adults</span>
                  <span className="font-medium">{options.adult}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-amber-600">Children</span>
                  <span className="font-medium">{options.children}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-amber-600">Rooms</span>
                  <span className="font-medium">{options.room}</span>
                </div>
              </div>
            </div>
            
            {/* Search Button */}
            <button 
              className="w-full py-2.5 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition flex items-center justify-center gap-2"
              onClick={handleSearch}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search Hotels
            </button>
          </div>
          
          {/* Results Section */}
          <div className="flex-1">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h1 className="text-xl font-semibold text-gray-800 mb-4">Available Hotels</h1>
              <div className="space-y-4">
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};