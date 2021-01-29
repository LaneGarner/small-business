import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import "./Map.css";

export const Map = ({ position }) => {
    // const currentListing = props.listings.find(listing => listing.id == props.match.params.id)
    // const position = [30.216000, -97.761830]


    return (
        <div>
            {/* <button onClick={()=> console.log(props.listings)}>click</button> */}
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position}>
                    <Popup>
                        Lil Nonna's
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}