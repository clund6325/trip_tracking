import React from "react";

const LocationEdit = ({ trip, location }) => {
  const {id} = trip
  const { loc_name, id } = location
  const defaultLocName = loc_name ? loc_name : "";
  return (
    <>
      <h1>Editing {loc_name}</h1>
      <form action={`/trips/${id}/locations`} method="post">
        <input type='hidden' name="_method" value="patch" />
        <input
          placeholder="Location"
          type="text"
          required
          defaultValue={defaultLocName}
          name="[loc_name]"
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default LocationEdit;