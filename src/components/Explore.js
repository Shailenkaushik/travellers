import React from 'react'
import Amritsar1 from './Images/Amritsar1.jpg'
import Goa1 from './Images/Goa2.jpg'

import Varansi1 from './Images/Varansi1.jpg'

import Ooty1 from './Images/Ooty1.jpg'
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import PageContext from '../context/Context';
export default function Courausal() {

  const { setId } = useContext(PageContext);
  const navigate = useNavigate();
  const onClickHandler = (localId) => {
    setId(localId);
    navigate(`/manaliPage/${localId}`)
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <>
      <div id="explore" >
        <hr />
        <h1 style={{ textAlign: 'center' }}> Explore with us</h1>
        <br />
        <div style={{height: '100%'}}>
          <Slider {...settings}>
            <div style={{ height: '100%' }}>
              <div className="card" style={{ width: '80%', margin: "auto" }}>
                <img src={Amritsar1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Amritsar</h5>
                  <p className="card-text">Steeped in history and spirituality, Amritsar is one of the most-visited cities in the state of Punjab. It is home to the famous Golden Temple or Sri Harmandir Sahib and is frequented...</p>
                  <button onClick={() => onClickHandler(5)} className="btn btn-primary">More info.</button>
                </div>
              </div>
            </div>
            <div style={{ height: '100%' }}>
              <div className="card" style={{ width: '80%', margin: "auto" }}>
                <img src={Goa1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Goa</h5>
                  <p className="card-text">Goa is famous for its pristine beaches, hippie vibes, and vibrant parties, Goa is counted among the best holiday destinations in India. The union territory is frequented by tourists year-round, especially in the winter...</p>
                  <button onClick={() => onClickHandler(2)} className="btn btn-primary">More info.</button>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={{ width: '80%', margin: "auto" }}>
                <img src={Varansi1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Varanasi</h5>
                  <p className="card-text">Situated on the banks of River Ganga in Uttar Pradesh, the holy city of Varanasi or Banaras is counted among the most sacred places in India. The city is known for some of the most....</p>
                  <button onClick={() => onClickHandler(7)} className="btn btn-primary">More info.</button>
                </div>
              </div>
            </div>
            <div>
              <div className="card" style={{ width: '80%', margin: "auto" }}>
                <img src={Ooty1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Ooty</h5>
                  <p className="card-text">      "des": "Ooty is one of the most frequented holiday destinations for tourists from Tamil Nadu, Kerala and Karnataka. Given the fact that the southern part of India gets too hot during ...",
 .</p>
                  <button onClick={() => onClickHandler(3)} className="btn btn-primary">More info.</button>
                </div>
              </div>
            </div>
            

          </Slider>
          <br />
          <hr />
        </div>
      </div>
    </>
  )
}
