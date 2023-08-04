import React, { useEffect } from 'react'
import './main.scss';
import { data } from './data';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsClipboardCheck } from 'react-icons/bs';
import Aos from 'aos';

export const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [Aos]);

    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 className="title">
                    Sitios mas visistados
                </h3>
            </div>
            <div className="secContent grid">
                {data.map((item, index) => {
                    return (
                        <div data-aos="fade-up" key={index} className="singleDestination">
                            <div className="imageDiv">
                                <img src={item.imgSrc} all={item.destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">
                                    {item.destTitle}
                                </h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className='icon' />
                                    <span className="name">{item.location}</span>
                                </span>
                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{item.grade}{' '}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{item.fees}</h5>
                                    </div>
                                </div>
                                <div className="desc">
                                    <p>{item.description}</p>
                                </div>
                                <button className='btn flex'>
                                    DETAILS <BsClipboardCheck className='icon' />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
