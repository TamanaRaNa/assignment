import React from 'react';

const Dashboard = () => {
  const data = [
    { platform: 'WazirX', lastTradedPrice: '₹25,72,612', buySellPrice: '₹25,72,610 / ₹25,72,612', difference: '-3.14 %', savings: '₹83,498' },
    { platform: 'Bitbns', lastTradedPrice: '₹28,83,906', buySellPrice: '₹28,55,164 / ₹28,82,157', difference: '8.58 %', savings: '₹2,27,796' },
    // Add other platforms here...
  ];

  return (
    <div className="dashboard">

        <div className='h1headings'>
        <h3>Best Price to Trade</h3>
      <h1>₹26,56,110</h1>
      <h3>Average BTC/INR net price including commission</h3>
        </div>
    
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Last Traded Price</th>
            <th>Buy / Sell Price</th>
            <th>Difference</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.platform}</td>
              <td>{item.lastTradedPrice}</td>
              <td>{item.buySellPrice}</td>
              <td>{item.difference}</td>
              <td>{item.savings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
