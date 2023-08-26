import React from 'react'
import './Loginpage.css'
import Vedio2 from '../Images/loginback.mp4'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      {/* <marquee className="top-container" >
            Tourism Made Easy!!!
        </marquee> */}
      <video className='vdo' src={Vedio2} autoPlay loop muted ></video>
      <section className="vh-100 signup" >
                    
      <div className="container py-5 h-100" style={{marginTop:'50px',height:'650px'}}>
    
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{borderRradius: '1rem',width: '1000px', marginLeft:'100px'}}>
           
   
        
              <div className="row g-0">
                
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
    
                    <form>
    
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}}></i>
                        <p className="h1 fw-bold mb-0" id="imp">TourismMadeEasy</p>
                      </div>
    
                      <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
    
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" placeholder='Enter your email' className="form-control form-control-lg" />
                        <label className="form-label" for="form2Example17">Email address</label>
                      </div>
    
                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" placeholder='Enter your password' className="form-control form-control-lg" />
                        <label className="form-label" for="form2Example27">Password</label>
                      </div>
    
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button"><Link to="/" >Login</Link></button>
                      </div>
    
                     
                      <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link to="/Loginfolder/Register"
                          style={{color: '#393f81'}}>Register here</Link></p>
                      
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}
