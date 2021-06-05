import React from 'react';

const Locations = ({trip, locations}) => {
  const {name, id} = trip
  const {loc_name, id} = locations
  const url = `/trips/${id}/locations`
  return(
    <>
      <h1>Locations</h1>
      <a href={`/trips/${id}`}> Back to Trips</a>
      <br />
      <a href={url + '/new'} >New Location</a>
      {
        locations.map( (location) => (
          <div>
            <h3>{location.loc_name}</h3>
            <a href={url + '/' + location.id}>Show Location</a>
            {' '}
            <a href={url + '/' + location.id + '/edit'} >Edit Location</a>
            {' '}
            <a href={url + '/' + location.id} data-method= "delete" >Delete Location</a>
          </div>
        ))
      }
    </>
  )
}

export default Locations;