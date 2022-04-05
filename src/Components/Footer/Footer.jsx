import React from "react"
import './Footer.css'

export default () => {
 return(

<footer className="text-center text-lg-start bg-light text-muted">
               
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    
  
    <div className="container text-center text-md-start mt-5">
    
      <div className="row mt-3">
     
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Talita
          </h6>
        </div>
    
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
           Menu
          </h6>
          <p>
            <a href="#!" className="text-reset">Home</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Destino</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Promoção</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Contato</a>
          </p>
        </div>
      
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Contato
          </h6>
          <p><i className="fas fa-home me-3"></i> Guarulhos, SP</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            Agency@travel.com
          </p>
          <p><i className="fas fa-phone me-3"></i> 55 11 99999-9999</p>
        </div>
      </div>
    </div>

  <div className="text-center p-4">
    © 2021 Copyright
  </div>
</footer>
 )   
}