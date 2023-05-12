import React from 'react'
import servicesData from './servicesData'
import { Link } from 'react-router-dom'

const Services = () => {
  

  return (
        <div className='container'>
    {/* <div className='nav'> */}
    <div className='tour'>
       <div className="nav"
         style={{backgroundImage:`url("./pics/pic4.jpg")`,
         backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height:"60vh"
       
    }}>
    <h1>CUBA</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/Register">Register</Link></li>
        <li><Link to='/ContactUs'>Contact Us</Link></li>
        <li><Link to="/usersdetail">User Data</Link></li>
        <li><Link to='/Booking'>Booking</Link></li>
        <li><Link to='/About'>About Us</Link></li>
        </ul>
      </div>
      </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

      <div className='row'>
        {
          servicesData.map((item) => {
            return(
              <>
    <div className='col-md-4 col-lg-4 col-12'>
      <img src={item.img}/>
      <h6 style={{color:"#39BDBC"}}>{item.title}</h6> &nbsp;
      <i className='fa fa-map-marker map-marker-icon'/>
      <span className='title'>
            {item.location}
          </span>
          <i className='fa fa-star' style={{color:"#e85c27 "}}></i> &nbsp;
            <i className='fa fa-star' style={{color:"#e85c27 "}}></i> &nbsp;
          <i className='fa fa-star' style={{color:"#e85c27 "}}></i> &nbsp;
          <i className='fa fa-star' style={{color:"#e85c27 "}}></i> &nbsp;
          
          <br/>
          <h6>{item.floors}</h6>
          <hr/>
          <div className='bt'>
          <h6 style={{fontFamily:"serif"}}>From :</h6>
          <div>
          <h5 style={{fontFamily:"fantasy",color:"red"}}>On <br/>Request</h5>
          <Link to={`/Services/${item.id}`} className='btn btn-warning '>Book on</Link>
    </div>
    </div>
    </div>
              </>
            )
          })


        }
    </div>
  
      </div>
      
  )
}

export default Services

// import React from 'react';
// import servicesData from './servicesData';
// import { Link } from 'react-router-dom';

// const Services = () => {
//   return (
//     <div className='container'>
//       <div className='tour'>
//         <div
//           className='nav'
//           style={{
//             backgroundImage: `url("./pics/pic4.jpg")`,
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             height: '60vh',
//           }}
//         >
//           <h1>CUBA</h1>
//           <ul>
//             <li>
//               <Link to='/'>Home</Link>
//             </li>
//             <li>
//               <Link to='/Register'>Register</Link>
//             </li>
//             <li>
//               <Link to='/ContactUs'>Contact Us</Link>
//             </li>
//             <li>
//               <Link to='/usersdetail'>User Data</Link>
//             </li>
//             <li>
//               <Link to='/Booking'>Booking</Link>
//             </li>
//             <li>
//               <Link to='/About'>About Us</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className='row'>
//         {servicesData.map((item) => (
//           <div className='col-md-4 col-lg-4 col-12' key={item.id}>
//             <img src={item.img} alt={item.title} />
//             <h6 style={{ color: '#39BDBC' }}>{item.title}</h6> &nbsp;
//             <i className='fa fa-map-marker map-marker-icon' />
//             <span className='title'>{item.location}</span>
//             <i className='fa fa-star' style={{ color: '#e85c27' }}></i> &nbsp;
//             <i className='fa fa-star' style={{ color: '#e85c27' }}></i> &nbsp;
//             <i className='fa fa-star' style={{ color: '#e85c27' }}></i> &nbsp;
//             <i className='fa fa-star' style={{ color: '#e85c27' }}></i> &nbsp;
//             <br />
//             <h6>{item.floors}</h6>
//             <hr />
//             <div className='bt'>
//               <h6 style={{ fontFamily: 'serif' }}>From :</h6>
//               <div>
//                 <h5 style={{ fontFamily: 'fantasy', color: 'red' }}>On <br />Request</h5>
//                 <Link to={`/Services/${item.id}`} className='btn btn-warning'>
//                   Book on
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;