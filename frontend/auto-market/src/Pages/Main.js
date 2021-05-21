import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';

// Components

import SingleResultBox from '../Components/SingleResultBox';
import CategoryBox from '../Components/CategoryBox';

// Icons

import IconCar from '../Assets/Icons/car.svg';
import IconMoto from '../Assets/Icons/moto.svg';
import IconSportsCar from '../Assets/Icons/sport_car.svg';
import IconTrailer from '../Assets/Icons/trailer.svg';
import IconVan from '../Assets/Icons/van.svg';
import IconWheel from '../Assets/Icons/wheel.svg';

const categoriesData = [
  { category: 'Automobiliai', icon: IconCar },
  { category: 'Motociklai', icon: IconMoto },
  { category: 'Sportiniai', icon: IconSportsCar },
  { category: 'Mikroautobusai', icon: IconVan },
  { category: 'Priekabos', icon: IconTrailer },
  { category: 'Dalys', icon: IconWheel },
];

function Main() {
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/v1/getAllData`).then((res) => {
      setData(res.data);
      setDataLoaded(true);
    });
  }, []);

  console.log(data);

  return (
    <main>
      <div className='hero'>
        <div className='hero-container'>
          <div className='filter-placeholder'></div>
        </div>
      </div>
      <div className='categories-container'>
        {categoriesData.map((item) => (
          <CategoryBox category={item.category} icon={item.icon} />
        ))}
      </div>
      <div className='latest-posts-container'>
        <h2>Naujausi skelbimai</h2>
        <div className='results'>
          {dataLoaded ? (
            data.map((post) => (
              <SingleResultBox
                image={post.image}
                make={post.make}
                model={post.model}
                price={post.price}
                year={post.year}
                id={post._id}
                mileage={post.mileage}
                fuelType={post.fuelType}
                transimssionType={post.transimssionType}
              />
            ))
          ) : (
            <p>Gaunama informacija</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
