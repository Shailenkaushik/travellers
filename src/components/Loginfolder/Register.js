import React, { useState } from 'react'

import './Loginpage.css'
import Vedio2 from '../Images/loginback.mp4'
import { Link } from 'react-router-dom';


const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });

  }
  console.log(user)
 
  const postData=async(e)=>{
    e.preventDefault();
    const{name,email,password}=user;
    if(name && email && password){
      const res=await fetch("https://travellers-fd65f-default-rtdb.firebaseio.com/finalpracticum.json",
      {
       method:"POST",
       headers:{
         "Content-Type": "application/json",
       },
       body:JSON.stringify({
     name,
     email,
     password
       }), 
      }
       );
       if(res){
        alert("Account created successfully");
         setUser({
           name: "",
           email: "",
           password: ""
         })
   
       } 
      
    }
    else{
      alert("Please fill all the data");
    }
   
    };
   

  
  


  return (
    <div>
      {/* <marquee className="top-container" >
            Tourism Made Easy!!!
        </marquee> */}
      <video className='vdo' src={Vedio2} autoPlay loop muted ></video>
      <section className="vh-100 signup" >

        <div className="container py-5 h-100" style={{ marginTop: '50px', height: '650px' }}>

          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRradius: '1rem', width: '1000px', marginLeft: '100px' }}>



                <div className="row g-0">

                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form className="contact100-form " method="POST">

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                          <p className="h1 fw-bold mb-0" id="imp">TourismMadeEasy</p>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}><b>New user register:</b></h5>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example17">Name</label>
                          <input type="name" id="form2Example17" name="name" placeholder='Enter your name' onChange={getUserData} value={user.name}  className="form-control form-control-lg" />

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example27">Email</label>
                          <input type="Email" id="form2Example27" name="email" placeholder='Enter your email' onChange={getUserData}  value={user.email}  required className="form-control form-control-lg" />

                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example27">Create Password</label>
                          <input type="password" id="form2Example27" name="password"  placeholder='Enter password' onChange={getUserData} value={user.password}  required  className="form-control form-control-lg" />

                        </div>
                        <div className="pt-1 mb-4 my-3" >
                          <button className="btn btn-primary" onClick={postData} type="button">Create account</button>
                          <div style={{margintop: '10px'}}>
                          <Link to="/" className="btn btn-primary my-3">Direct to Home page</Link>
                          </div>
                          
                        </div>




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
export default Register