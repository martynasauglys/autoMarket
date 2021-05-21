import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SingleResultBox.css';

function SingleResultBox({
  make,
  model,
  price,
  image,
  year,
  id,
  mileage,
  transimssionType,
  fuelType,
}) {
  const history = useHistory();
  const onClick = useCallback(() => {
    const to = `/post/${id}`;
    history.push(to);
  }, [history]);

  return (
    <div className='result' onClick={onClick}>
      <div
        className='result-image'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='result-text'>
        <h2>
          {make} {model}
        </h2>
        <p className='general-info'>
          {year}m. | {fuelType} | {transimssionType}
        </p>
        <p className='price'>{price} €</p>
      </div>
    </div>
  );
}

export default SingleResultBox;
