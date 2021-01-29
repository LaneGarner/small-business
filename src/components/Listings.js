import React from 'react'
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Listings = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            {/* <h4>Welcome, {props.user.username}</h4> */}
            {/* <h1>Vegan pizza</h1> */}
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
                    {props.listings.map((listing) => (
                        <TableRow key={listing.id}>
                            <TableCell component="th" scope="row">
                                <Link style={{ textDecoration: "underline"}} to={`/details/${listing.id}`}>{listing.name}</Link>
                            </TableCell>
                            <TableCell>{listing.description}</TableCell>
                            <TableCell>{listing.hours}</TableCell>
                            <TableCell>{listing.address}</TableCell>
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