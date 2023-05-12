import React from 'react'
import servicesData from './servicesData'
import { useParams } from 'react-router-dom'

const ServiceDetails = () => {
  const params = useParams();
  const filtered = servicesData.filter(obj => {
    return obj.id == params.id
  })
  const fArray = 0;
  return (
    <>
<div className='container'>
  <h2 className='container mb-4'>Services Details</h2>
  <table className="table">
    <thead className="thead-dark">
    <th scope="col">Place Name</th>
        <th scope="col">Adult</th>
        <th scope="col">Child</th>
        <th scope="col">Amount</th>
        <th scope="col">Days</th>
        <th scope="col">Nights</th>
        <th scope="col">image</th>
    </thead>
      <tr>
        <th scope="row">{filtered[fArray].title}</th>
        <td>2</td>
        <td>2</td>
        <td>50000</td>
        <td>2</td>
        <td>2</td>
        <td><img src={`/${filtered[fArray].img}`} height={30} /></td>

      </tr>
    </table>
</div>


      <br />
      <br />
    </>
  )
}

export default ServiceDetails