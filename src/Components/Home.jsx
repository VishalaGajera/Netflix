import React, { useState } from 'react'
import Data from "../Components/Data"
import "../style/Home.scss"

const Home = () => {
    const [ndata, setNdata] = useState(Data);

    const DisplaySeries = (series) => { 
        const filteredData = Data.filter(e => e.title === series);
        setNdata(filteredData);
    }
    console.log(ndata);
    
    return (
        <>
            <div className="heading">
                <h1>List of top 5 Netflix series in 2019</h1>
            </div>
            <div className="menu">
                <h3 className='item' onClick={(e)=>DisplaySeries("Netflix Original Series")}>Netflix</h3>
                <h3 className='item' onClick={(e)=>DisplaySeries("Amazon Original Series")}>Amazon</h3>
            </div>
            <div className="cards">
                {
                    ndata?.map((e) => {
                        return (
                            <div className="card">
                                <img src={e.imgsrc} alt="myPic" className='card_img' />
                                <div className="card_info">
                                    <span className="card_category">{e.title}</span>
                                    <h2 className="card_title">{e.sname}</h2>
                                    <a href={e.links}>
                                        <button className='btn'>Watch Now</button>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home