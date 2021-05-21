import React from 'react';
import './CategoryBox.css';

function CategoryBox({ icon, category }) {
  return (
    <div className='category-box'>
      <img className='category-box-icon' src={icon} />
      <h2 className='category-box-title'>{category}</h2>
    </div>
  );
}

export default CategoryBox;
