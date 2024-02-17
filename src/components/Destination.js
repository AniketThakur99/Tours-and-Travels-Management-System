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
        heading="Goa"
        text="Experience the magic of Goa's beaches, culture, and cuisine for an unforgettable getaway. From sun-kissed shores to historic landmarks, there's something for every traveler to enjoy. Indulge in delicious seafood and spicy curries, and dance under the stars to the rhythm of Goa's vibrant nightlife. Make memories that will last a lifetime in this tropical paradise. Goa awaits you with open arms!"
        img1={Mountain1}
        img2={Mountain2}
        />

        <DestinationData
        className="first-des-reverse"
        heading="Manali"
        text="
        Discover the allure of Manali amidst the majestic Himalayas, offering thrilling adventures and serene landscapes. Immerse yourself in the rich culture through visits to ancient temples and vibrant markets. Indulge in hearty Himachali cuisine and cozy up by bonfires under the starry sky. Experience the bliss of natural hot springs in Vashisht and unwind amidst the tranquility of this mountain paradise. Manali beckons with its blend of adventure, culture, and scenic beauty"
        img1={Mountain3}
        img2={Mountain4}
        />
    </div>
    )
}
export default Destination