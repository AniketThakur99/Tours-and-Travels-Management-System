import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Register from './routes/Register';
import Trip from './components/Trip';
import BookingForm from './components/Booking/BookingForm';
import Tours from './components/Admin/CreateTours';
import AllTours from './components/Admin/AllTours';
import AllUsers from './components/Admin/AllUsers';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/trip" element={<Trip />} />
      <Route path="/booking/:id" element={<BookingForm />} />
      <Route path="/createtour" element={<Tours/>} />
      <Route path="/alltours" element={<AllTours/>} />
      <Route path="/allusers" element={<AllUsers/>} />

      </Routes>
    </div>
  );
}

export default App;
