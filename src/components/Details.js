import React from 'react'
import { Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Map from '../containers/Map'

export const Details = (props) => {
    const currentListing = props.listings.find(listing => listing.id == props.match.params.id)

    return (
        <Container maxWidth="sm" className="car-container">
            <Link to="/"><ArrowBackIosIcon /></Link>
            <h1>{currentListing.name}</h1>
            <h3>{currentListing.address}</h3>
            <h3>{currentListing.hours}</h3>
            <p>{currentListing.description}</p>
            <p>{currentListing.position}</p>
            <Map position={currentListing.position}/>
        </Container>
    )
}