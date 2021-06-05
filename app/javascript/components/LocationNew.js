import React from 'react';

const LocationNew = ({location, trip}) => {
  const {id} = trip
  const {loc_name, errors} = location
  const defaultLocName = loc_name ? loc_name : ''
  return (
    <>
      <h1>New Location</h1>
      { errors && errors }
      <form action={`/trips/${id}/locations`} method="post">
        <input
          type="text"
          required
          placeholder='Location'
          defaultValue={defaultLocName}
          name="[loc_name]"
        />
        <button type="submit">Add Location</button>
      </form>
    </>
  )
}
export default LocationNew; 