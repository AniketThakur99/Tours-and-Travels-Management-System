// import "./TripStyles.css";
// import TripDataComponent from "./TripData"; // Change the import name here
// import Trip1 from "../assets/Goa.jpg";
// import Trip2 from "../assets/Manali.jpg";
// import Trip3 from "../assets/Kerala_Backwaters.jpg";

// function Trip() {
//   return (
//     <div className="trip">
//       <h1>Recent Trips</h1>
//       <p>You can discover unique destinations </p>
//       <div className="tripcard">
//         <TripDataComponent
//           image={Trip1}
//           heading="Trip in Goa"
//           text="Embark on a coastal odyssey to Goa, where every moment is a celebration of sun, sand, and soulful adventures."
//           id="1"
//           price="100" // Example price
//         />
//         <TripDataComponent
//           image={Trip2}
//           heading="Trip in Manali"
//           text="Discover the Himalayan haven of Manali, where snow-capped peaks meet serene valleys in a symphony of adventure and tranquility."
//           id="2"
//           price="120" // Example price
//         />
//         <TripDataComponent
//           image={Trip3}
//           heading="Trip in Backwaters Kerala"
//           text="Navigate the tranquil labyrinth of Kerala's backwaters, where emerald canals weave through lush landscapes, offering a serene voyage into nature's embrace."
//           id="3"
//           price="150" // Example price
//         />
//       </div>
//     </div>
//   );
// }

// export default Trip;



import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import TripDataComponent from './TripData'; 
import './TripStyles.css';

function Trip() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('http://localhost:8080/trips'); 
        setTrips(response.data);
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations</p>
      <div className="tripcard">
        {trips.map(trip => (
          <TripDataComponent
            key={trip.id}
            image={trip.image} 
            heading={trip.heading}
            text={trip.description}
            id={trip.id}
            price={trip.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Trip;
