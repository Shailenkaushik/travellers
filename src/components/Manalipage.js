import React from 'react'
import data from './Data'
import './Manali.css'
export default function Manalipage(props) {
    const { name, AC1, Flight,Hotel,des,AC2, AC3, Img1, Img2, Img3 } = data["Destination"][Number(props.id) - 1]
    
    return (
        <>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ width: '80%', marginLeft: '150px', marginTop: '50px' }}>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: '500px' }}>
                        <img src={Img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" style={{ height: '500px' }} >
                        <img src={Img2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" style={{ height: '500px' }}>
                        <img src={Img3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div  style={{ width: '80%', marginLeft: '150px', marginTop: '100px', padding: '5px' }} >
                <br />
                <div style={{ textAlign: 'center' }}>
                    <h2>Lets discover  {name}</h2>
                </div>
                <div className="card-body" style={{ width: '90%', marginLeft: '70px' }}>
                    <h3 className="cardtitle">
                        <span>Key features of {name} </span>

                    </h3>

                    <div >
                        <div className="card-body">
                            <h3 className="cardtitle">
                                <span><p className="card-text">{des}</p>
                                </span>

                            </h3>

                        </div >

                    </div>

                </div>
                <br />


                <div className="accordion" id="accordionExample" style={{ width: '90%', marginLeft: '70px' }}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>  Best time to visit?</b>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {AC1}
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <b>Places to visit?</b>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {AC2}
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>   Things to do?</b>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {AC3}
                            </div>
                        </div>
                    </div>


                </div>
                <div style={{ marginLeft: '70px' }}>
                    
                    <br />
                    <p>
                        For Flight Bookings :  <a className="btn btn-primary mr-1" href={Flight} role="button">     Flight Booking</a>
                    </p>
                    <br />

                    <p>
                        For Hotel Bookings :  <a className="btn btn-primary mr-1" href={Hotel} role="button">     Hotel Booking</a>
                    </p>
                </div>

            </div>

        </>
    )
}