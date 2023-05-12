import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className='nav'>
        <h1 style={{color:"black"}}>Travel</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Register'>Register</Link></li>
          <li><Link to='/ContactUs'>Contact Us</Link></li>
          {/* <li><Link to='/Booking'>Booking</Link></li> */}
          <li><Link to='/About'>About Us</Link></li>
        </ul>
      </div>
      <div className='vid'>
        <video autoPlay loop muted playsInline className='backvid'>
          <source src='pics/mp4.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='content'>
        <h6>Welcome to your travel world</h6>
        <h1>TRAVEL</h1>
        <h1>WORLD</h1>
        <button className='btn btn-danger btn-sm'>Read more</button>
      </div>
      <div className='cont'>
        <h2>Welcome to our Travel World</h2>
      </div>
    {/* <br/> */}
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-6'>
        <img src='./pics/aaa.jpg' style={{width:"600px",height:"300px"}}/>
      </div>
      <div className='col-md-6 mt-3'>
        <h3 style={{textAlign:"center",color:'#39BDBC'}}>Day Trip to vinales Valley</h3>
        <p className='mt-4'>
        Escape the busy life of Havana and get lost in nature on this day tour. Visit the tobacco &nbsp plantations of Viñales, where the best tobacco in the world grows. You will stop at a cigar factory to learn about the manual processing of tobacco leaves into cigars. You will also have time to hike, explore subterranean caves, and appreciate some of the oldest geological formations of Cuba.
        </p>
      <button className='btn btn-warning '>Learning</button>

      </div>


    </div>
    </div>

    <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-6 mt-3'>
        <h3 style={{textAlign:"center",color:'#39BDBC'}}>Day Trip to vinales Valley</h3>
        <p className='mt-4'>
        Escape the busy life of Havana and get lost in nature on this day tour. Visit the tobacco &nbsp plantations of Viñales, where the best tobacco in the world grows. You will stop at a cigar factory to learn about the manual processing of tobacco leaves into cigars. You will also have time to hike, explore subterranean caves, and appreciate some of the oldest geological formations of Cuba.
        </p>
      <button className='btn btn-warning '>Learning</button>

      </div>
      <div className='col-md-6'>
        <img src='./pics/b2.jpg' style={{width:"650px",height:"300px"}}/>
      </div>


    </div>
    </div>
    <br/>
   <div className='container' style={{backgroundColor:"#f3f3f3"}}>
    <div className='row center'>
      <div className='col-md-12'>
        <h2 style={{textAlign:"center",color:"#39BDBC"}}>What Do We Offer?</h2>
        <div className="hr-theme-star" style={{textAlign:"center"}}>
          <div className='hr-line'></div>
          <div className='hr-icon'>
            <i className='fa fa-star'style={{color:"#e85c27 "}}>
            </i>
          </div>
          <div className='hr-line'></div>
        </div>
      </div>
    </div>
    <div className='container'>
    <div className='row'>
      <div className='col-md-4 '>
        <img src='./pics/travel.png'/>
        <h6>Customized Experiences</h6>
        <p>We created Knowing Cuba for the traveler who seeks unique experiences. The traveler who wants to return home with unique stories, something different to show, an experience no one else has tried. Let us know the kind of Cuban experience you seek and we'll plan it for you!</p>
      </div>
      <div className='col-md-4'>
        <img src='./pics/leader.png'/>
        <h6>Leaders in the market</h6>
        <p>With over 20 years of experience receiving travelers from all over the world, our name is recognized all over Cuba. Whether you’re traveling alone, or with a group, our experienced team can help with every aspect of your trip, and will recommend the best options.</p>
      </div>
      <div className='col-md-4'>
        <img src='./pics/support.png'/>
        <h6>24/7 support</h6>
        <p>We know that when you are in a foreign country, things don’t always go as planned. Our local team in Havana is available to help with any emergency. Once you book a trip with us, you’ll have access to our 24/7 emergency number to make sure you travel worry-free.
</p>
      </div>

   </div>
   </div>
   </div>
<br/>
   <div className='container'>
    <div className='row'>
      <div className='col-md-6'>
        <img src='./pics/whyus.jpg'/>
      </div>
      
      <div className='col-md-6'>
        <h2 style={{textAlign:"center",color:'#39BDBC'}}>Why Us?</h2>
        <p>We're a team of experienced travel agents and sales agents based in Cuba, <br/>
        providing personalized services to groups, corporate companies, and individual <br/>
        travelers from all over the world since 2002. We love our country, and we want the <br/>
         world to experience it and get to know it the way we do. Nothing makes us happier<br/>
          than seeing our customers smile, hearing what a great experience they had in Cuba.<br/>
           We look forward to being your local host agency.</p>
      <button className='btn btn-warning btn-sm' style={{alignItems:"center"}}>Learn More</button>
      </div>


    </div>
    </div>
    <br/>
    <div className="mail">
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-2'>
            <img src='./pics/logoalt.png'/>
          </div>
         

      </div>

    </div>
    </div>
  <br/>
  <br/>
</>
    
  )
}

export default Home
