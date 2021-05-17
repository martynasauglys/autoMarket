import React, { useState, useEffect } from 'react'
import './Main.css'
import axios from 'axios'
import SingleResultBox from '../Components/SingleResultBox'

function Main() {
    const [data, setData] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:3001/v1/getAllData`).then((res) => {
            setData(res.data)
            setDataLoaded(true)
        })
    }, [])

    console.log(data)

    return (
        <main>
            <div className="hero">
                <div className="hero-container">
                    <div className="filter-placeholder"></div>
                </div>
            </div>
            <div className="latest-posts-container">
                <h2>Naujausi skelbimai</h2>
                <div className="results">
                    {dataLoaded ? (
                        data.map((post) => (
                            <SingleResultBox
                                image={post.image}
                                make={post.make}
                                model={post.model}
                                price={post.price}
                                year={post.year}
                                id={post._id}
                            />
                        ))
                    ) : (
                        <p>Gaunama informacija</p>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Main
