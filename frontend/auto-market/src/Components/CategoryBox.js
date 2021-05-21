import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './CategoryBox.css';

function CategoryBox({ icon, category }) {
  const history = useHistory();
  const onClick = useCallback(() => {
    const to = `/${category}`;
    history.push(to);
  }, [history]);

  return (
    <div className='category-box' onClick={onClick}>
      <img className='category-box-icon' src={icon} />
      <h2 className='category-box-title'>{category}</h2>
    </div>
  );
}

export default CategoryBox;
