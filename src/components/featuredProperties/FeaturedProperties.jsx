// import React from 'react'
// import "./featuredProperties.css";

// function FeaturedProperties() {
//   return (
//     <div className="fp">
//         <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/428594128.jpg?k=f3a32b30d8b6c1bc1ad6326d0f3fca0430b9d5a409e1dcdab7659a9d724ebf87&o=" alt="" className="fpImg" />
//         <span className="fpName">ApartHotel stare Miestro</span>
//           <span className="fpCity">Lusaka</span>
//          <span className="fpPrice">Starting from 130$</span>
//          <div className="fpRating">
//              <button>8.9</button>
//          <span>Excellent</span>
//          </div>
        

//        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/428594128.jpg?k=f3a32b30d8b6c1bc1ad6326d0f3fca0430b9d5a409e1dcdab7659a9d724ebf87&o=" alt="" className="fpImg" />
//         <span className="fpName">ApartHotel stare Miestro</span>
//           <span className="fpCity">Lusaka</span>
//          <span className="fpPrice">Starting from 130$</span>
//          <div className="fpRating">
//              <button>8.9</button>
//          <span>Excellent</span>
//          </div>
//           <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/428594128.jpg?k=f3a32b30d8b6c1bc1ad6326d0f3fca0430b9d5a409e1dcdab7659a9d724ebf87&o=" alt="" className="fpImg" />
//         <span className="fpName">ApartHotel stare Miestro</span>
//           <span className="fpCity">Lusaka</span>
//          <span className="fpPrice">Starting from 130$</span>
//          <div className="fpRating">
//              <button>8.9</button>
//          <span>Excellent</span>
//          </div>
//     </div>
//   )
// }

// export default FeaturedProperties


import React from 'react'
import "./featuredProperties.css";

function FeaturedProperties() {
  return (
    <div className="fp">
      {[1, 2, 3].map((item) => (
        <div className="fpItem" key={item}>
          <img 
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/428594128.jpg?k=f3a32b30d8b6c1bc1ad6326d0f3fca0430b9d5a409e1dcdab7659a9d724ebf87&o=" 
            alt="ApartHotel Stare Miestro" 
            className="fpImg" 
          />
          <div className="fpDetails">
            <span className="fpName">ApartHotel Stare Miestro</span>
            <span className="fpCity">Lusaka, Zambia</span>
            <span className="fpPrice">Starting from $130</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedProperties