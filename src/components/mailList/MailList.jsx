import React, { useState } from 'react';
import "./mailList.css";

function MailList() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      
      console.log('Subscribed with email:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="mail">
      <div className="mailContent">
        <h1 className="mailTitle">Save Time, Save Money!</h1>
        <span className="mailDesc">
          Sign up and we'll send the best deals straight to your inbox
        </span>
        
        {subscribed ? (
          <div className="successMessage">
            Thank you for subscribing! Check your email for exclusive deals.
          </div>
        ) : (
          <form className="mailForm" onSubmit={handleSubmit}>
            <div className="inputContainer">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribeBtn">
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default MailList;