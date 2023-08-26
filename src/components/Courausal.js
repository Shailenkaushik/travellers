import React, {useState} from 'react'
import Vedio2 from './Images/Vedio2.mp4'
import './Courausal.css'
import { useNavigate } from 'react-router-dom';

export default function Courausal() {
  
  const [message, setMessage]=useState("");
  // const handleChange=e=>{
  //   console.log(message);
  //   setMessage(e.target.value);
  // }

  function handleChange(event) {
    const newValue = event.target.value;
    setMessage(newValue);
  }

  const navigate = useNavigate();

  const handleNext = () => {
    console.log(message)
    if(message.toLowerCase()==="manali"){
      navigate(`/manaliPage/1`, {
        props: {
          name: "Manali",
          id: "1"
        }
      })
    }
   else if(message.toLowerCase()==="goa"){
      navigate(`/manaliPage/2`, {
        props: {
          name: "Goa",
          id: "2"
        }
      })
    }
   else if(message.toLowerCase()==="ooty"){
      navigate(`/manaliPage/3`, {
        props: {
          name: "Ooty",
          id: "3"
        }
      })
    }
   else if(message.toLowerCase()==="shillong"){
      navigate(`/manaliPage/4`, {
        props: {
          name: "Shillong",
          id: "4"
        }
      })
    }
   else if(message.toLowerCase()==="amritsar"){
      navigate(`/manaliPage/5`, {
        props: {
          name: "Amritsar",
          id: "5"
        }
      })
    }
   else if(message.toLowerCase()==="shimla"){
      navigate(`/manaliPage/6`, {
        props: {
          name: "Shimla",
          id: "6"
        }
      })
    }
   else if(message.toLowerCase()==="varanasi"){
      navigate(`/manaliPage/7`, {
        props: {
          name: "Varanasi",
          id: "7"
        }
      })
     
      }
      else{
        alert("Location unavailble")
    }
   
  }
 
  
  return (
    <>
      <div className='main' style={{width: '100%'}}>
      
        
        <video src={Vedio2} autoPlay loop muted ></video>
        <div className="content" style={{top: '155px',color: '#155f9c'}}>
          <h1 style={{fontSize: '55px'}}>Explore India with us</h1>
          <form className="d-flex" role="search">
            <input className="form-control me-2" onChange={handleChange} value={message} type="search" placeholder="Search" aria-label="Search" />
            <br />
            <div style={{border :'seagreen 4px',borderRadius:'2'}}>
            <button className="btn btn-outline-success active-purple-4" onClick={handleNext} type="submit"><b>Search</b></button>
            </div>
           
          </form>
        </div>
<hr />
      </div>
    </>
  )
}
