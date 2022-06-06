import '../styles/Menu.css'

import React from 'react'

import menuItem from '../../data/data'

import MenuItem from './MenuItem'

function Menu() {
  return (
    <div className="menu">
      <div className="menuTitle">
        <div className="menuList">
          {menuItem.map((menuItem, key) => {
            return <MenuItem key={key} image={menuItem.image} price={menuItem.price}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu