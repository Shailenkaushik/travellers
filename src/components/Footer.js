import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <>

      <footer id='footer' className="text-center text-lg-start bg-light text-muted" style={{ background: 'linear-gradient(to left, #13547a 0%, #80d0c7 100%)' }}>

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          <div className="me-3 d-none d-lg-block" style={{color: 'black'}}>
            <span><b>Get connected with us on social networks:</b></span>
          </div>




        </section>



        <section className="bold">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" style={{color: 'black'}}>

                <h5 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h5>
                <h6><b>&nbsp;&nbsp;&nbsp;&nbsp;Tourism made easy.</b>
                
                </h6>
              </div>



              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{color: 'black'}}>

                <h6 className="text-uppercase fw-bold mb-4" >
                 <b>Founders</b> 

                </h6>
                <div > 
                <p className='hoverstate'>
                  <a href="https://www.linkedin.com/in/shailen-kaushik-52b9b6249" className="text-reset"><b>Shailen Kaushik</b></a>
                </p>
                <p className='hoverstate'>
                  <a href="https://www.linkedin.com/in/yatin-ahlawat-43719122b" className="text-reset"><b>Yatin Ahlawat</b></a>
                </p>
                <p className='hoverstate'>
                  <a href="#!" className="text-reset"><b>Ashish Kumar</b></a>
                </p>
                </div>
              </div>



              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style={{color: 'black'}}>

                <h6 className="text-uppercase fw-bold mb-4">
                 <b>Useful links</b> 
                </h6>
                <p className='hoverstate'>
                  <a href="http://localhost:3000/#trending" className="text-reset"><b>Trending destinations</b></a>
                </p>
                <p className='hoverstate'>
                  <a href="http://localhost:3000/#explore" className="text-reset"><b>Explore</b></a>
                </p>

              </div>



              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"style={{color: 'black'}}>

                <h6 className="text-uppercase fw-bold mb-4"><b>Contact for more info:</b></h6>
                <p><i className="fas fa-home me-3"></i><b>Kaushikshailen131@gmail.com </b> </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  <b>yatin9588@gmail.com</b>
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  <b>ashishahlawat911@gmail.com</b>
                </p>
              </div>

            </div>

          </div>
          
        </section>



       

      </footer>


    </>
  )
}
