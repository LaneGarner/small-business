

// // You'll want actions that 

// delete a listing 

export const removeListing = (index) => {
    return {
        type: 'REMOVE_LISTING',
        value: index
    }
}

// add a listing, 

export const addListing = (index) => {
    return{
        type: 'ADD_LISTING',
        value: index
    }
}

// login/logout 

export const logIn = (user) => {
    return {
        type: 'LOG_IN',
        value: user
    }
}



// fetch coordinates for your map given a certain address. 


// You may have more or less depending on how you structure your app.

