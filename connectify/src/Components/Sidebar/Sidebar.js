
import React from 'react';
import SidebarButton from './SidebarButton';
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="button-container">
      <SidebarButton text="Services" />
      <SidebarButton text="Team" />
      <SidebarButton text="Blog" />
      <SidebarButton text="Pricing" />
    </div>
  );
};

export default Sidebar;
