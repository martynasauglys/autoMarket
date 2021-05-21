import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SinglePost.css';

function SinglePost() {
  const [post, setPost] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:3001/v1/getPost/' + id)
      .then((res) => setPost(res.data));
  }, [id]);

  return (
    <main>
      <div className='singlePost-container'>
        <div className='singlePost-content'>
          <div
            className='singlePost-image'
            style={{ backgroundImage: `url(${post.image})` }}
          ></div>
          <div className='singlePost-details'>
            <h1>
              {post.make} {post.model}
            </h1>
            <h2>{post.year} metų</h2>
            <p>Kaina</p>
            <h3>{post.price} Eur</h3>
          </div>
          <div className='singlePost-table'>
            <table>
              <tr>
                <td>Markė</td>
                <td>{post.make}</td>
              </tr>
              <tr>
                <td>Modelis</td>
                <td>{post.model}</td>
              </tr>
              <tr>
                <td>Pagaminimo metai</td>
                <td>{post.year}</td>
              </tr>
              <tr>
                <td>Rida</td>
                <td>{post.mileage}</td>
              </tr>
              <tr>
                <td>Kuro tipas</td>
                <td>{post.fuelType}</td>
              </tr>
              <tr>
                <td>Pavarų dėžė</td>
                <td>{post.transimssionType}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SinglePost;
