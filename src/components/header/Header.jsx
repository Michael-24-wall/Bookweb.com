
// import "./header.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
// import { faPlane, faCar, faTaxi } from '@fortawesome/free-solid-svg-icons';
// import { DateRange } from 'react-date-range';
// import 'react-date-range/dist/styles.css';
// import 'react-date-range/dist/theme/default.css';
// import { useState, useRef, useEffect } from "react";
// import { format } from "date-fns";
// import { useNavigate } from "react-router-dom";
// import PropTypes from 'prop-types';

// function Header({ type, onSearch }) {
//   const [openStartDate, setOpenStartDate] = useState(false);
//   const [openEndDate, setOpenEndDate] = useState(false);
//   const [date, setDate] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
//       key: 'selection'
//     }
//   ]);

//   const [destination, setDestination] = useState("");
//   const [openOptions, setOpenOptions] = useState(false);
//   const [options, setOptions] = useState({
//     adult: 1,
//     children: 0,
//     room: 1,
//   });

//   const startDatePickerRef = useRef(null);
//   const endDatePickerRef = useRef(null);
//   const optionsRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (startDatePickerRef.current && !startDatePickerRef.current.contains(event.target)) {
//         setOpenStartDate(false);
//       }
//       if (endDatePickerRef.current && !endDatePickerRef.current.contains(event.target)) {
//         setOpenEndDate(false);
//       }
//       if (optionsRef.current && !optionsRef.current.contains(event.target)) {
//         setOpenOptions(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleOption = (name, operation) => {
//     setOptions(prev => {
//       const newValue = operation === "inc" ? prev[name] + 1 : Math.max(prev[name] - 1, name === "adult" || name === "room" ? 1 : 0);
//       return {
//         ...prev,
//         [name]: newValue
//       };
//     });
//   };

//   const handleSearch = () => {
//     if (destination.trim()) {
//       if (onSearch) {
//         onSearch({ destination, dates: date, options });
//       } else {
//         navigate("/hotels", { state: { destination, date, options } });
//       }
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div className="header">
//       <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
//         <div className="headerList">
//           <div className="headerListItem active">
//             <FontAwesomeIcon icon={faBed} />
//             <span>Stays</span>
//           </div>
//           <div className="headerListItem">
//             <FontAwesomeIcon icon={faPlane} />
//             <span>Flights</span>
//           </div>
//           <div className="headerListItem">
//             <FontAwesomeIcon icon={faCar} />
//             <span>Car rentals</span>
//           </div>
//           <div className="headerListItem">
//             <FontAwesomeIcon icon={faTaxi} />
//             <span>Airport Taxi</span>
//           </div>
//         </div>
        
//         {type !== "list" && (
//           <>
//             <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
//             <p className="headerDesc">
//               Get rewarded for your travels — unlock instant savings of 10% or more with a free account
//             </p>
//             <button className="headerBtn">Sign in / Register</button>
            
//             <div className="headerSearch">
//               <div className="headerSearchItem">
//                 <FontAwesomeIcon icon={faBed} className="headerIcon" />
//                 <input
//                   type="text"
//                   placeholder="Where are you going?"
//                   className="headerSearchInput"
//                   onChange={(e) => setDestination(e.target.value)}
//                   value={destination}
//                   onKeyPress={handleKeyPress}
//                 />
//               </div>
              
//               <div className="headerSearchItem" ref={startDatePickerRef}>
//                 <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
//                 <span 
//                   onClick={() => {
//                     setOpenStartDate(!openStartDate);
//                     setOpenEndDate(false);
//                     setOpenOptions(false);
//                   }} 
//                   className="headerSearchText"
//                 >
//                   {format(date[0].startDate, "MM/dd/yyyy")}
//                 </span>
//                 {openStartDate && (
//                   <div className="datePickerWrapper">
//                     <DateRange
//                       editableDateInputs={true}
//                       onChange={(item) => setDate([item.selection])}
//                       moveRangeOnFirstSelection={false}
//                       ranges={date}
//                       className="date"
//                       minDate={new Date()}
//                       rangeColors={["#003580"]}
//                     />
//                   </div>
//                 )}
//               </div>
              
//               <div className="headerSearchItem" ref={endDatePickerRef}>
//                 <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
//                 <span 
//                   onClick={() => {
//                     setOpenEndDate(!openEndDate);
//                     setOpenStartDate(false);
//                     setOpenOptions(false);
//                   }} 
//                   className="headerSearchText"
//                 >
//                   {format(date[0].endDate, "MM/dd/yyyy")}
//                 </span>
//                 {openEndDate && (
//                   <div className="datePickerWrapper">
//                     <DateRange
//                       editableDateInputs={true}
//                       onChange={(item) => setDate([item.selection])}
//                       moveRangeOnFirstSelection={false}
//                       ranges={date}
//                       className="date"
//                       minDate={date[0].startDate}
//                       rangeColors={["#003580"]}
//                     />
//                   </div>
//                 )}
//               </div>
              
//               <div className="headerSearchItem" ref={optionsRef}>
//                 <FontAwesomeIcon icon={faPerson} className="headerIcon" />
//                 <span 
//                   onClick={() => {
//                     setOpenOptions(!openOptions);
//                     setOpenStartDate(false);
//                     setOpenEndDate(false);
//                   }} 
//                   className="headerSearchText"
//                 >
//                   {`${options.adult} adult · ${options.children} children · ${options.room} room`}
//                 </span>
//                 {openOptions && (
//                   <div className="options">
//                     <div className="optionItem">
//                       <span className="optionText">Adult</span>
//                       <div className="optionCounter">
//                         <button 
//                           disabled={options.adult <= 1} 
//                           className="optionCounterButton" 
//                           onClick={() => handleOption("adult", "dec")}
//                         >
//                           -
//                         </button>
//                         <span className="optionCounterNumber">{options.adult}</span>
//                         <button 
//                           className="optionCounterButton" 
//                           onClick={() => handleOption("adult", "inc")}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <div className="optionItem">
//                       <span className="optionText">Children</span>
//                       <div className="optionCounter">
//                         <button 
//                           disabled={options.children <= 0} 
//                           className="optionCounterButton" 
//                           onClick={() => handleOption("children", "dec")}
//                         >
//                           -
//                         </button>
//                         <span className="optionCounterNumber">{options.children}</span>
//                         <button 
//                           className="optionCounterButton" 
//                           onClick={() => handleOption("children", "inc")}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                     <div className="optionItem">
//                       <span className="optionText">Room</span>
//                       <div className="optionCounter">
//                         <button 
//                           disabled={options.room <= 1} 
//                           className="optionCounterButton" 
//                           onClick={() => handleOption("room", "dec")}
//                         >
//                           -
//                         </button>
//                         <span className="optionCounterNumber">{options.room}</span>
//                         <button 
//                           className="optionCounterButton" 
//                           onClick={() => handleOption("room", "inc")}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
              
//               <div className="headerSearchItem">
//                 <button className="headerBtn" onClick={handleSearch}>Search</button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// Header.propTypes = {
//   type: PropTypes.string,
//   onSearch: PropTypes.func
// };

// Header.defaultProps = {
//   type: "",
//   onSearch: null
// };

// export default Header;


import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBed, 
  faCalendarDays, 
  faPerson, 
  faPlane, 
  faCar, 
  faTaxi 
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState, useRef, useEffect } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function Header({ type, onSearch }) {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      key: 'selection'
    }
  ]);
  const [destination, setDestination] = useState("");
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState({
    startDate: false,
    endDate: false
  });
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const startDatePickerRef = useRef(null);
  const endDatePickerRef = useRef(null);
  const optionsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (startDatePickerRef.current && !startDatePickerRef.current.contains(event.target)) {
        setIsDatePickerOpen(prev => ({ ...prev, startDate: false }));
      }
      if (endDatePickerRef.current && !endDatePickerRef.current.contains(event.target)) {
        setIsDatePickerOpen(prev => ({ ...prev, endDate: false }));
      }
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setIsOptionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionChange = (name, operation) => {
    setOptions(prev => {
      const minValue = name === "adult" || name === "room" ? 1 : 0;
      const newValue = operation === "inc" 
        ? prev[name] + 1 
        : Math.max(prev[name] - 1, minValue);
      
      return { ...prev, [name]: newValue };
    });
  };

  const handleSearch = () => {
    if (!destination.trim()) {
      alert("Please enter a destination");
      return;
    }

    const searchData = { 
      destination, 
      dates: dateRange, 
      options 
    };

    if (onSearch) {
      onSearch(searchData);
    } else {
      navigate("/hotels", { state: searchData });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const toggleDatePicker = (pickerType) => {
    setIsDatePickerOpen(prev => ({
      startDate: pickerType === 'startDate' ? !prev.startDate : false,
      endDate: pickerType === 'endDate' ? !prev.endDate : false
    }));
    setIsOptionsOpen(false);
  };

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
    setIsDatePickerOpen({ startDate: false, endDate: false });
  };

  const navItems = [
    { icon: faBed, label: "Stays", active: true },
    { icon: faPlane, label: "Flights" },
    { icon: faCar, label: "Car rentals" },
    { icon: faTaxi, label: "Airport Taxi" }
  ];

  return (
    <header className="header" role="banner">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <nav className="headerList" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className={`headerListItem ${item.active ? 'active' : ''}`}
              tabIndex="0"
              role="button"
            >
              <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
        
        {type !== "list" && (
          <>
            <div className="headerHero">
              <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
              <p className="headerDesc">
                Get rewarded for your travels — unlock instant savings of 10% or more with a free account
              </p>
              <button className="headerBtn">Sign in / Register</button>
            </div>
            
            <div className="headerSearch" role="search">
              <div className="headerSearchItem">
                <label htmlFor="destination" className="sr-only">Destination</label>
                <FontAwesomeIcon icon={faBed} className="headerIcon" aria-hidden="true" />
                <input
                  id="destination"
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                  value={destination}
                  onKeyPress={handleKeyPress}
                  aria-label="Enter destination"
                />
              </div>
              
              <div className="headerSearchItem" ref={startDatePickerRef}>
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" aria-hidden="true" />
                <button
                  onClick={() => toggleDatePicker('startDate')}
                  className="headerSearchText"
                  aria-label="Select start date"
                  aria-expanded={isDatePickerOpen.startDate}
                >
                  {format(dateRange[0].startDate, "MM/dd/yyyy")}
                </button>
                {isDatePickerOpen.startDate && (
                  <div className="datePickerWrapper" role="dialog" aria-modal="true">
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDateRange([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dateRange}
                      className="date"
                      minDate={new Date()}
                      rangeColors={["#003580"]}
                    />
                  </div>
                )}
              </div>
              
              <div className="headerSearchItem" ref={endDatePickerRef}>
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" aria-hidden="true" />
                <button
                  onClick={() => toggleDatePicker('endDate')}
                  className="headerSearchText"
                  aria-label="Select end date"
                  aria-expanded={isDatePickerOpen.endDate}
                >
                  {format(dateRange[0].endDate, "MM/dd/yyyy")}
                </button>
                {isDatePickerOpen.endDate && (
                  <div className="datePickerWrapper" role="dialog" aria-modal="true">
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDateRange([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dateRange}
                      className="date"
                      minDate={dateRange[0].startDate}
                      rangeColors={["#003580"]}
                    />
                  </div>
                )}
              </div>
              
              <div className="headerSearchItem" ref={optionsRef}>
                <FontAwesomeIcon icon={faPerson} className="headerIcon" aria-hidden="true" />
                <button
                  onClick={toggleOptions}
                  className="headerSearchText"
                  aria-label="Select guests and rooms"
                  aria-expanded={isOptionsOpen}
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </button>
                {isOptionsOpen && (
                  <div className="options" role="menu">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button 
                          disabled={options.adult <= 1} 
                          className="optionCounterButton" 
                          onClick={() => handleOptionChange("adult", "dec")}
                          aria-label="Decrease adult count"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button 
                          className="optionCounterButton" 
                          onClick={() => handleOptionChange("adult", "inc")}
                          aria-label="Increase adult count"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button 
                          disabled={options.children <= 0} 
                          className="optionCounterButton" 
                          onClick={() => handleOptionChange("children", "dec")}
                          aria-label="Decrease children count"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button 
                          className="optionCounterButton" 
                          onClick={() => handleOptionChange("children", "inc")}
                          aria-label="Increase children count"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button 
                          disabled={options.room <= 1} 
                          className="optionCounterButton" 
                          onClick={() => handleOptionChange("room", "dec")}
                          aria-label="Decrease room count"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button 
                          className="optionCounterButton" 
                          onClick={() => handleOptionChange("room", "inc")}
                          aria-label="Increase room count"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="headerSearchItem">
                <button 
                  className="headerBtn" 
                  onClick={handleSearch}
                  aria-label="Search hotels"
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  type: PropTypes.string,
  onSearch: PropTypes.func
};

Header.defaultProps = {
  type: "",
  onSearch: null
};

export default Header;
