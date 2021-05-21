import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SingleResultBox from '../Components/SingleResultBox';
import './CategoryPage.css';

function CategoryPage() {
  const { type } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/v1/getAllData`).then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(data);

  return (
    <div className='container'>
      <h2>{type}</h2>
      <div className='category-page-box posts-flex'>
        {data
          .filter((item) => item.type == type)
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
          ))}
      </div>
    </div>
  );
}

export default CategoryPage;
