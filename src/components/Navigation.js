import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import LocalPizzaIcon from '@material-ui/icons/LocalPizza'
import { Link } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {main: '#3BB371'},
    },
});

export const Navigation = () => {
    return (
        <ThemeProvider theme={theme}>
        <AppBar position="relative">
            <Toolbar>
                <IconButton style={{ color: 'white'}}>
                    <LocalPizzaIcon />
                </IconButton>
                <Typography variant="h6" style={{ color: 'white', flexGrow: "1" }}>
                    ATX Vegan Pizza
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}
