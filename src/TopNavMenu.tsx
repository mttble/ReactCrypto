import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNavMenu: React.FC = () => (
  <div className="bg-[#2b2b2b] text-white flex items-center justify-between p-2.5">
    <NavLink to="/" className="text-white no-underline ml-4">
      Crypto In React
    </NavLink>
    <div>
      <NavLink to="/bitcoin" className="text-white no-underline mr-4">Bitcoin</NavLink>
    </div>
  </div>
);

export default TopNavMenu;

