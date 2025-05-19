import React, { useState } from 'react';
import '../styles/global.scss';

const Tabs = ({ patient }) => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {['history', 'medication', 'notes'].map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <p>{patient[activeTab]}</p>
      </div>
    </div>
  );
};

export {Tabs};
