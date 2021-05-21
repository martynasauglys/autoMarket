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

const carouselBreakpoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 550, itemsToShow: 3, pagination: false },
  { width: 850, itemsToShow: 4, pagination: false },
];

function Main() {
  // Fetching data
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  //   Filter selection
  const [type, setType] = useState([]);
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/v1/getAllData`).then((res) => {
      setData(res.data);
      setDataLoaded(true);
      //   Setting filters data
      setType(Array.from(new Set(res.data.map((item) => item['type']))));
      setMake(Array.from(new Set(res.data.map((item) => item['make']))));
      setModel(Array.from(new Set(res.data.map((item) => item['model']))));
    });
  }, []);

  console.log(type);

  return (
    <main>
      <div className='hero'>
        <div className='hero-container'>
          <div className='main-filter'>
            <form>
              <div className='form-control'>
                <input placeholder='Tipas' type='text' list='post-type' />
                <datalist id='post-type'>
                  {type
                    ? type.map((item, key) => {
                        return <option key={key} value={item} />;
                      })
                    : null}
                </datalist>
              </div>
              <div className='form-control'>
                <input placeholder='Markė' type='text' list='post-make' />
                <datalist id='post-make'>
                  {make
                    ? make.map((item, key) => {
                        return <option key={key} value={item} />;
                      })
                    : null}
                </datalist>
              </div>
              <div className='form-control'>
                <input placeholder='Modelis' type='text' list='post-model' />
                <datalist id='post-model'>
                  {model
                    ? model.map((item, key) => {
                        return <option key={key} value={item} />;
                      })
                    : null}
                </datalist>
              </div>
              <button className='main-filter-btn'>IEŠKOTI</button>
            </form>
          </div>
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
            data
              .slice(0, 4)
              .reverse()
              .map((post) => (
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
