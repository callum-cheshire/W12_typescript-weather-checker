type LocationProps = {
    displayedLocation: string
}

const Location = ({displayedLocation}:LocationProps) => {
    return ( 
        <section>
            {displayedLocation}
        </section>
     );
}
 
export default Location;