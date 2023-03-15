
import { TypeProps } from "../App/App";

const Clouds = ({ data }: TypeProps) => {
    return ( 
        <section className="clouds">
            Clouds: {data.clouds.all}
        </section>
     );
}
 
export default Clouds;