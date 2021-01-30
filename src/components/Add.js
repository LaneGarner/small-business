import { useState, useEffect } from 'react'
import { TextField, Button, Container } from '@material-ui/core'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Map from '../containers/Map'
import Grid from '@material-ui/core/Grid';
import "./Map.css";
import { OpenStreetMapProvider } from 'leaflet-geosearch';


export const Add = (props) => {
    // const currentListing = props.listings.find(listing => listing.id == props.match.params.id)
    // let position = [30.266666, -97.733330]
    // let position
    // const provider = new OpenStreetMapProvider();
    // const results = await provider.search({ query: input.value });



    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [hours, setHours] = useState("")
    const [description, setDescription] = useState("")
    const [position, setPosition] = useState([30.266666, -97.733330])

    const allListingIds = []
    props.listings.map(listing => allListingIds.push(listing.id))
    const newId = (Math.max(...allListingIds)) + 1

    const add = (e) => {
        e.preventDefault()
        
        const newListing = { 
            "id": newId,
            "name": name, 
            "address": address,
            "hours": hours,
            "description": description,
            "position": position,
        }

        props.addListing(newListing)
        props.history.push("/");

    }

    useEffect( async () => {
            const provider = new OpenStreetMapProvider();
        
            // console.log(results[0].x)
            const results = await provider.search({ query: address });

            let xCoord;
            let yCoord;

            if (results.length != 0) {
                xCoord = results[0].x
                yCoord = results[0].y
                setPosition([yCoord, xCoord])
            }

            
            // console.log("results: ", results)
            // {results.length != 0 && setPosition(`[${results[0].y}, ${results[0].x}]`)}
        // position = `[${results[0].x}, ${results[0].y}]`
        // console.log(position)

    }, [address, MapContainer])
    

    return (
        <Grid style={{marginTop: "2em"}} container direction="row">
            {/* <Link to="/"><ArrowBackIosIcon /></Link> */}
            {/* <Grid item> */}
                <form onSubmit={add} className="add-form">
                    <TextField
                        onChange={e => setName(e.target.value)}
                        required 
                        name="name"
                        label="Name"
                        type="text"
                    />
                    <TextField 
                        onChange={e => setAddress(e.target.value)}
                        required
                        name="address"
                        label="Address"
                        type="text"
                    />
                    <TextField 
                        onChange={e => setHours(e.target.value)}
                        required
                        name="hours"
                        label="Hours (ex. 8AM - 9PM)"
                        type="text"
                    />
                    <TextField
                        onChange={e => setDescription(e.target.value)}
                        required
                        name="description"
                        label="Description"
                        type="text"
                    />
                    <Button
                        type="submit"
                        color="primary"
                        className="add-button"
                        variant="contained"
                        >
                        Save
                    </Button>
                </form>

                <Container maxWidth="sm">
                <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
                    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={position} />
                </MapContainer>
                </Container>
        </Grid>
    )
}