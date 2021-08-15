function populateBoard(){
    /* locations on the board named by "#row#column" 
    with the top-most row being #8 and 
    the right-most column being #8
    */
    let locations =[82,84,86,88,
                    71,73,75,77,
                    62,64,66,68,
                    51,53,55,57,
                    42,44,46,48,
                    31,33,35,37,
                    22,24,26,28,
                    11,13,15,17
                    ]

    //constructor - not currenting being used               
    // function location(piece){
    //     this.piece = piece;
    //     this.destination = false;
    // }  
    // all the information including piece location is tracked as property/values in this object
    let locationTracker = {}

    //populate locationTracker with black, red, or empty location objects

    locations.forEach(loc=>{
        if(loc>60){
            locationTracker[`${loc}`] = 'bpawn'
        }else if(loc<40){
            locationTracker[`${loc}`] = 'rpawn'
        }else{
            locationTracker[`${loc}`] = 'empty'
        }
    })

    return locationTracker
}

export {populateBoard}