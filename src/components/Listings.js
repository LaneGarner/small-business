import React from 'react'
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';

export const Listings = (props) => {

    return (
        <Container maxWidth="lg" className="car-container">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        {document.cookie === "loggedIn=true" &&
                        <TableCell>Delete</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.listings.map((listing, idx) => (
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                                <Link style={{ textDecoration: "underline"}} to={`/details/${listing.id}`}>{listing.name}</Link>
                            </TableCell>
                            <TableCell>{listing.description}</TableCell>
                            <TableCell>{listing.hours}</TableCell>
                            <TableCell>{listing.address}</TableCell>
                            {document.cookie === "loggedIn=true" && (
                                <TableCell>
                                    <DeleteIcon 
                                        style={{ color: "tomato", cursor: "pointer"}} 
                                        onClick={()=>props.removeListing(idx)}
                                    />
                                </TableCell>
                            )
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* <h1>Vegan friendly pizza</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.veganFriendlyListings.map((listing) => (
                        <TableRow key={listing.id}>
                            <TableCell component="th" scope="row">
                                <Link to ="/{listing.id}">{listing.name}</Link>
                            </TableCell>
                            <TableCell>{listing.description}</TableCell>
                            <TableCell>{listing.hours}</TableCell>
                            <TableCell>{listing.address}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table> */}
        </Container>
    )
}