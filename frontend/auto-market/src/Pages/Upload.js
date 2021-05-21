import React, { useState, useEffect } from 'react';
import './Upload.css';
import axios from 'axios';

function Upload() {
  const [fullPost, setFullPost] = useState({});
  const [isPosted, setIsPosted] = useState(false);

  useEffect(() => {});

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('type', fullPost.type);
    formData.append('make', fullPost.make);
    formData.append('model', fullPost.model);
    formData.append('year', fullPost.year);
    formData.append('fuelType', fullPost.fuelType);
    formData.append('mileage', fullPost.mileage);
    formData.append('transimssionType', fullPost.transimssionType);
    formData.append('price', fullPost.price);
    formData.append('images', fullPost.image);
    console.log(fullPost.image);
    console.log(formData);
    axios.post('http://localhost:3001/v1/dataPost', formData).then(() => {
      console.log(fullPost);
      setIsPosted(true);
    });
  }

  return (
    <main>
      <div className='upload-container'>
        <h2>Naujas skelbimas</h2>
        <div className='upload-form'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='upload-form-control'>
              <select
                name='type'
                id='type'
                onChange={(e) =>
                  setFullPost({
                    ...fullPost,
                    type: e.target.value,
                  })
                }
              >
                <option value='notSelected'>Kategorija</option>
                <option value='Automobiliai'>Automobiliai</option>
                <option value='Mikroautobusai'>Mikroautobusai</option>
                <option value='Dalys'>Dalys</option>
                <option value='Motociklai'>Motociklai</option>
                <option value='Sportinis'>Sportinis</option>
                <option value='Priekabos'>Priekabos</option>
              </select>
            </div>
            <div className='upload-form-control'>
              <input
                type='text'
                placeholder='Automobilio markė'
                onChange={(e) =>
                  setFullPost({
                    ...fullPost,
                    make: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className='upload-form-control'>
              <input
                type='text'
                placeholder='Automobilio modelis'
                onChange={(e) =>
                  setFullPost({
                    ...fullPost,
                    model: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className='upload-form-control'>
              <input
                type='text'
                placeholder='Pagaminimo metai'
                onChange={(e) =>
                  setFullPost({
                    ...fullPost,
                    year: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className='upload-form-control'>
              <select
                name='fuelType'
                id='fuelType'
                onChange={(e) =>
                  setFullPost({
                    ...fullPost,
                    fuelType: e.target.value,
                  })
                }
              >
                <option value='notSelected'>Kuro tipas</option>
                <option value='Dyzelis'>Dyzelis</option>
                <option value='Benzinas'>Benzinas</option>
                <option value='Elektra'>Elektra</option>
              </select>
            </div>
            <div className='upload-form-control'>
              <input
                type='text'
                placeholder='Rida'
                onChange={(e) =>
                  setFullPost({
                    ...fullPost,
                    mileage: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className='upload-form-control'>
              <input
                type='text'
                placeholder='Pavarų dėžė'
                onChange={(e) =>
                  setFullPost({
                    ...fullPost,
                    transimssionType: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className='upload-form-control'>
              <input
                type='text'
                placeholder='Kaina'
                onChange={(e) =>
                  setFullPost({
                    ...fullPost,
                    price: e.target.value,
                  })
                }
              ></input>
            </div>
            <div>
              <input
                type='file'
                accept='.png, .jpg, .jpeg'
                name='image'
                onChange={(e) =>
                  setFullPost({
                    ...fullPost,
                    image: e.target.files[0],
                  })
                }
              />
            </div>
            <button type='submit'>Įkelti skelbimą</button>
          </form>
          {isPosted ? (
            <p className='message-success'>Skelbimas Ikeltas!</p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Upload;
