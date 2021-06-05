import React from 'react'

const Addresses = ({ location, addresses }) => {
    const { location_name, trip_id, id } = location
    const { street, state, city, country, region, zip } = addresses
    const url = `/locations/${id}/addresses`
    return (
    <>
        <h1>Addresses</h1>
        <a> href={}</a>
        <br />
        <a href={url + '/new'}>New Addresses</a>
        {
            addresses.map( (address) =>(
                <h1>${address.street}</h1>
            ))
        }
    </>
    )

}

export default Addresses;