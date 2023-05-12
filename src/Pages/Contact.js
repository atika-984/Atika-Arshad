import React from 'react'

const Contact = () => {
  return (
   <div>
  <div className="container bootstrap snippets bootdeys">    
      
    <div className="row">
      <div className="col-sm-6">
        <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed/v1/place?q=New+York+University&key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} style={{width: '100%', height: 360}} />
        </div>
      </div>{/* end col */}
      {/* Contact form */}
      <div className="col-sm-6">
        <form role="form" name="ajax-form" id="ajax-form" action="https://formsubmit.io/send/coderthemes@gmail.com" method="post" className="form-main">
          <div className="form-group">
            <label htmlFor="name2">Name</label>
            <input className="form-control" id="name2" name="name" onblur="if(this.value == '') this.value='Name'" onfocus="if(this.value == 'Name') this.value=''" type="text" defaultValue="Name" />
            <div className="error" id="err-name" style={{display: 'none'}}>Please enter name</div>
          </div> {/* /Form-name */}
          <div className="form-group">
            <label htmlFor="email2">Email</label>
            <input className="form-control" id="email2" name="email" type="text" onfocus="if(this.value == 'E-mail') this.value='';" onblur="if(this.value == '') this.value='E-mail';" defaultValue="E-mail" />
            <div className="error" id="err-emailvld" style={{display: 'none'}}>E-mail is not a valid format</div> 
          </div> {/* /Form-email */}
          <div className="form-group">
            <label htmlFor="message2">Message</label>
            <textarea className="form-control" id="message2" name="message" rows={5} onblur="if(this.value == '') this.value='Message'" onfocus="if(this.value == 'Message') this.value=''" defaultValue={"Message"} />
            <div className="error" id="err-message" style={{display: 'none'}}>Please enter message</div>
          </div> {/* /col */}
          <div className="row">            
            <div className="col-xs-12">
              <div id="ajaxsuccess" className="text-success">E-mail was successfully sent.</div>
              <div className="error" id="err-form" style={{display: 'none'}}>There was a problem validating the form please check!</div>
              <div className="error" id="err-timedout">The connection to the server timed out!</div>
              <div className="error" id="err-state" />
              <button type="submit" className="btn btn-primary btn-shadow btn-rounded w-md" id="send">Submit</button>
            </div> {/* /col */}
          </div> {/* /row */}
        </form> {/* /form */}
      </div> {/* end col */}
    </div> {/* end row */}
  </div>
</div>

    
  )
}

export default Contact


