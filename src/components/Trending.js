import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Manali2 from "./Images/Manali2.jpg"
import Shillong1 from './Images/Shillong1.jpg'
import Shimla1 from './Images/Shimla2.jpg'
import Varansi1 from './Images/Varansi1.jpg'

import Ooty1 from './Images/Ooty1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import PageContext from '../context/Context';


export default function Trending() {
    const { setId } = useContext(PageContext);
    const navigate = useNavigate();
    const onClickHandler = (localId) => {
        setId(localId);
        navigate(`/ManaliPage/${localId}`)
    }
    const settings = {

        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };
    return (
        <>


            <div id='trending' >

                <br />
                <br />
                <h1 style={{ marginLeft: '38%' }}>Trending destinaitons</h1>
                <br />
                <br /><br />
                <br />
                <Slider {...settings}>

                    <div>
                        <div className="card" style={{ width: '80%', margin: "auto" }}>
                            <div style={{ height: '400px' }}>
                                <img src={Manali2} className="card-img-top" alt="..." />
                            </div>

                            <div className="card-body" style={{ height: '300px' }}>
                                <h5 className="card-title"> Manali</h5>
                                <p className="card-text">Manali is situated in the Kullu Valley of Himachal Pradesh, Manali draws tourists with its natural beauty and tranquillity. The hill station is frequented by travellers from across the country...</p>
                                <button onClick={() => onClickHandler(1)} className="btn btn-primary">More info.</button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="card" style={{ width: '80%', margin: "auto" }}>
                            <div style={{ height: '400px' }}>
                                <img src={Shillong1} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body" style={{ height: '300px' }}>
                                <h5 className="card-title"> Shillong</h5>
                                <p className="card-text">Known for pleasant weather conditions and picturesque locations, Shillong in Meghalaya is one of the most cliched yet highly frequented tourist destinations in India. The hill station is popularly known as Scotland of the East, thanks to the rolling...</p>
                                <button onClick={() => onClickHandler(4)} className="btn btn-primary">More info.</button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="card" style={{ width: '80%', margin: "auto"}}>
                            <div style={{ height: '400px' }}>
                                <img src={Shimla1} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body" style={{ height: '300px' }}>
                                <h5 className="card-title"> Shimla</h5>
                                <p className="card-text">Located in Himachal Pradesh at a height of 2276 metres above sea level, Shimla has been attracting honeymooners and families for decades. This hill station was the summer capital of British India, and so...</p>
                                <button onClick={() => onClickHandler(6)} className="btn btn-primary">More info.</button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="card" style={{ width: '80%', margin: "auto" }}>
                            <div style={{ height: '400px' }}>
                                <img src={Varansi1} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body" style={{ height: '300px' }}>
                                <h5 className="card-title"> Varanasi</h5>
                                <p className="card-text">Situated on the banks of River Ganga in Uttar Pradesh, the holy city of Varanasi or Banaras is counted among the most sacred places in India. The city is known for some of the most...</p>
                                <button onClick={() => onClickHandler(7)} className="btn btn-primary">More info.</button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="card" style={{ width: '80%', margin: "auto"}}>
                            <div style={{ height: '400px' }}>
                                <img src={Ooty1} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body" style={{ height: '300px' }}>
                                <h5 className="card-title">Ooty</h5>
                                <p className="card-text">Ooty is one of the most frequented holiday destinations for tourists from Tamil Nadu, Kerala and Karnataka. Given the fact that the southern part of India gets too hot during the summer season, a trip to....</p>
                                <Link to="/" className="btn btn-primary" onClick={() => onClickHandler(3)}>More info.</Link>
                            </div>
                        </div>

                    </div>



                </Slider>
            </div >
        </>
    )
}

