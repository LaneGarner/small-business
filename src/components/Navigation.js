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

export const Navigation = (props) => {

    const logout = () => {
        console.log('logout')
        document.cookie = "loggedIn=false"

        props.logIn("")
        window.location.replace("/login");
    }
    

    return (
        <ThemeProvider theme={theme}>
        <AppBar position="sticky">
            <Toolbar>
                <IconButton onClick={()=> window.location.replace("/")} style={{ color: 'white'}}>
                    <LocalPizzaIcon />
                </IconButton>
                <Typography variant="h6" style={{ color: 'white', flexGrow: "1" }}>
                    ATX Vegan Pizza
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    {document.cookie === "loggedIn=true" && (
                        <li className="nav-list-item">
                            <Link to="/add">Add</Link>
                        </li>
                    )}
                        <li className="nav-list-item">
                    {document.cookie === "loggedIn=true" ? (
                        <div onClick={logout} style={{cursor: "pointer"}}>Log out</div>
                    ) : (
                        <Link to="/login">Login</Link>
                    )
                }
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
        {document.cookie === "loggedIn=true" ?
        <div style ={{background:"#D3D3D3", color:"#777", paddingTop:".3em", paddingBottom:".3em", paddingLeft:"2em"}}>Logged in as: {props.user}</div> :
        <div></div>
        
        }
        </ThemeProvider>
    )
}
