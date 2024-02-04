import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
const Destination =()=>{
    return(
   <div className="destination">
    <h1>Popular Destination</h1>
    <p>Tour give you the opportunity to experience</p> 

        <DestinationData
        className="first-des"
        heading="Taal Volcano"
        text="Taal Volcano Tagalog: Bulkang Taal is a large caldera filled by Taal
        Lake in the Philippines. Located in the province of Batangas about
        50 kilometers (31 mi) south of Manila, the volcano is the second
        most active volcano in the country with 38 recorded historical
        eruptions, all of which were concentrated on Volcano Island, near
        the middle of Taal Lake. The caldera was formed by prehistoric
        eruptions between 140,000 and 5,380 BP."
        img1={Mountain1}
        img2={Mountain1}
        />

        <DestinationData
        className="first-des-reverse"
        heading="Mt.Daguldul"
        text="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain."
        img1={Mountain3}
        img2={Mountain4}
        />
    </div>
    )
}
export default Destination