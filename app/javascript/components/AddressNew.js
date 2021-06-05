import React from 'react'

const AddressNew = ({ address, location }) => {
    const { location_name, trip_id, id } = location
    const { street, state, city, country, region, zip } = address
    return (
        <>
        <h1>New Address</h1>
        {address.map( (address) } =>(
        </>
    )
}

export default AddressNew;