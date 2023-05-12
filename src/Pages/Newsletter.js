import React from 'react'

const Newsletter = () => {
  return (
    <div>
 <div className="container ">	
  <div className="col-md-8 col-sm-12">				                
    <div className="well"> 
      <form className="form">
        <h4>Subscribe Newsletter</h4>
        <div className="input-group text-center">
          <input type="text" placeholder="Enter your email address" className="form-control input-lg" />
          <span className="input-group-btn"><button type="button" className="btn btn-lg btn-danger">Subscribe</button></span>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Newsletter