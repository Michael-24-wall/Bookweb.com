import React from 'react';
import "./footer.css";

function Footer() {
  const footerLinks = [
    {
      title: "Countries",
      items: ["Homes", "Apartments", "Resorts", "Villas", "Hostels", "B&Bs"]
    },
    {
      title: "Cities",
      items: ["New York", "London", "Paris", "Tokyo", "Dubai", "Barcelona"]
    },
    {
      title: "Regions",
      items: ["Caribbean", "Mediterranean", "Southeast Asia", "Scandinavia", "Central America", "Middle East"]
    },
    {
      title: "Airports",
      items: ["JFK Airport", "Heathrow", "Charles de Gaulle", "Haneda", "DXB", "El Prat"]
    },
    {
      title: "Districts",
      items: ["Manhattan", "Downtown", "Champs-Élysées", "Shibuya", "Downtown Dubai", "Gothic Quarter"]
    },
    {
      title: "More",
      items: ["Unique places", "Reviews", "Travel articles", "Seasonal deals", "Travel communities"]
    }
  ];

  return (
    <div className='footer'>
      <div className="footerContainer">
        <div className="fLists">
          {footerLinks.map((list, index) => (
            <ul className="fList" key={index}>
              <li className="fListTitle">{list.title}</li>
              {list.items.map((item, i) => (
                <li className="fListItem" key={i}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
        <div className="fBottom">
          <div className="fText">Copyright © {new Date().getFullYear()} Wallace Global Booking.</div>
          <div className="fLegal">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;