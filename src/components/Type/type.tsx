import './type.css'

import { TypeProps } from "../App/App";

const Type = ({data}: TypeProps) => {
    return (
        <section className="type">
            Type: {data.weather[0].main}
        </section>
    )
};

export default Type;
