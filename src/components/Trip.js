import "./TripStyles.css"
import Tripdata from "./TripData";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripcard">
                <Tripdata
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Explore the breathtaking beauty of Indonesia on your next adventure! 
                    From the lush jungles of Bali to the stunning beaches of Lombok, 
                    Indonesia offers a diverse range of experiences for every traveler. 
                    Immerse yourself in the rich culture and history of Yogyakarta, where ancient 
                    temples and traditions await. Discover the underwater wonders of Raja Ampat, 
                    home to some of the most biodiverse marine life on the planet. Whether you're 
                    seeking adventure, relaxation, or cultural immersion, Indonesia has something 
                    for everyone to enjoy."
                />

                <Tripdata
                    image={Trip2}
                    heading="Trip in Malasia"
                    text="Embark on an unforgettable journey to Malaysia, where vibrant cities, 
                    stunning landscapes, and diverse cultures await. Discover the bustling
                    streets of Kuala Lumpur, where modern skyscrapers stand alongside historic 
                    temples and bustling markets. Immerse yourself in the natural beauty of Borneo,
                    home to lush rainforests, exotic wildlife, and the majestic Mount Kinabalu.
                    Relax on the pristine beaches of Langkawi or explore the colonial charm of Penang.
                    With its rich history, delicious cuisine, and warm hospitality,
                    Malaysia offers a truly unique and unforgettable travel experience."
                />

                <Tripdata
                    image={Trip3}
                    heading="Trip in Goa"
                    text="Experience the laid-back charm and vibrant culture of Goa on your next getaway. 
                    Known for its beautiful beaches, eclectic mix of Portuguese and Indian influences, 
                    and lively nightlife, Goa is a destination like no other. Relax on the golden sands of 
                    Calangute or Anjuna Beach, soak up the sun at a beach shack, or explore the historic churches 
                    and temples that dot the landscape. Indulge in delicious seafood and local cuisine, 
                    shop for unique handicrafts at the bustling markets, or dance the night away at one of 
                    the many beach clubs. Whether you're seeking relaxation, adventure, or cultural immersion, 
                    Goa has something for everyone to enjoy."
                />
            </div>

        </div>
    )
}

export default Trip;