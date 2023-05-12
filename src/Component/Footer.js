import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
   {/* Footer */}
<section id="footer">
  <div className="container">
    <div className="row text-center text-xs-center text-sm-left text-md-left">
      <div className="col-xs-12 col-sm-4 col-md-4">
        <h5>links</h5>
        <ul className="list-unstyled quick-links">
          <li><a to="javascript:void();"><i className="fa fa-angle-double-right" />Home</a></li><br/>
          <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Register</a></li><br/>
          <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Login</a></li><br/>
          <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Contact Us</a></li><br/>
          <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Booking</a></li><br/>
          <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />About Us</a></li>

        </ul>
      </div>
      <div className="col-xs-12 col-sm-4 col-md-4">
        <h5>Contact Us</h5>
        <ul className="list-unstyled quick-links">
          <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Phone</a></li><br/>
          <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />+92 135 4562</a></li><br/>
          
          <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Email</a></li><br/>
          <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Worldtour@gmail.com</a></li>
          
          
          
        </ul>
      </div>
      <div className="col-xs-12 col-sm-4 col-md-4">
        <h5>Social Info</h5>
        <ul className="list-unstyled quick-links">
          <li><a href="javascript:void();"><i className="fa fa-angle-double-right" />Utenim ad minim veniam ,quisnostrud<br/>exerctation ullamco laboris nisi utaliquip<br/>ex ea commodo consequat.</a></li>  
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
        <ul className="list-unstyled list-inline social text-center">
          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook" /></a></li>
          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter" /></a></li>
          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram" /></a></li>
          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus" /></a></li>
          <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope" /></a></li>
        </ul>
      </div>
    </div>	
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
        <p><u><a href="https://www.tour.com/">Tour.com</a></u> </p>
      </div>
    </div>	
  </div>
</section>
{/* ./Footer */}

    </>
  )
}

export default Footer