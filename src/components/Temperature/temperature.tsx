import { TypeProps } from "../App/App";

const Temperature = ({data}: TypeProps) => {
    return ( 
        <section className="temperature">
            Temperature: {data.main.temp}
        </section>
     );
}
 
export default Temperature;