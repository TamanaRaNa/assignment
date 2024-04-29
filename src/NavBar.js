import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">HODLINFO</div>
      <select className="currency-dropdown">
        <option value="INR">INR</option>
      
      </select>
      <select className="crypto-dropdown">
        <option value="BTC">BTC</option>
    
      </select>
      <button className="buy-btn">BUY BTC</button>
      <div className="notification">
        <span>50</span>
      </div>
      <button className="telegram-btn">Connect Telegram</button>
    </div>
  );
};

export default NavBar;
