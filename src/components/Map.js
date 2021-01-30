import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useParams } from 'react-router-dom'
import { Icon } from "leaflet";
import "./Map.css";

export const Map = (props) => {
    const { id } = useParams();
    // const currentListing = props.listings.find(listing => listing.id == props.match.url)
    // const currentPosition = currentListing.position
    // const currentListing = props.listings.find(listing => listing.id == props.match.params.id)
    const currentListing = props.listings.find(listing => listing.id == id)
    const position = currentListing.position

    return (
        <div>
            {/* <button onClick={()=> console.log(props.listings)}>click</button> */}
            <MapContainer center={position} zoom={12.5} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position}>
                    <Popup>
                        {currentListing.name}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}