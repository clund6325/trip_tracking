import React from 'react';

const Location = ({ location }) => {
  const { id, loc_name, created_at } = location;
  return (
    <>
      <h1>{loc_name}</h1>
      <p>
        Created: {created_at}
      </p>
      <p>ID of the location is: {id}</p>
      <a href="/">Back</a>
      <br />
      <a href={'/trips/' + id + '/locations/' } data-method="delete">Delete Location</a>
      <br />
      <a href={'/trips/' + id + '/location/' + '/edit'}>Edit Location</a>
      <br />
      <a href={`/trips/${id}/locations/addresses`}>Show addresses</a>
    </>
  )
}

export default Location;