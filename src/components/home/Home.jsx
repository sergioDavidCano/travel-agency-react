import React from 'react';
import './home.scss';
import video2 from "../../assets/video(2).mp4";
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
export const Home = () => {
    return (
        <section className='home'>
            <div className='overlay'></div>
            <video src={video2} muted autoPlay loop type='video/mp4'></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">
                        Our Packages
                    </span>
                    <h1 className="homeTitle">
                        Search your Holiday
                    </h1>
                </div>
                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor='city'>
                            Search your destination
                        </label>
                        <div className="input flex">
                            <input type='text' placeholder='Enter name here.....'></input>
                            <GrLocation className='icon' />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor='date'>
                            Search your date
                        </label>
                        <div className="input flex">
                            <input type='date'></input>
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor='price'>Max price:</label>
                            <h3 className="total">
                                $5000
                            </h3>
                        </div>
                        <div className="input flex">
                            <input type='range' max='5000' min='1000'></input>
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <HiFilter className='icon' />
                        <span>MORE FILTERS</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
