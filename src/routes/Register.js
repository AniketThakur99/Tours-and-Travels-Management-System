import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/register.jpg"

import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";

function Register(){
    return(
        <>
        <Navbar />
       {/* <Hero cName="hero-mid" heroImg={AboutImg}  btnClass="hide"/>*/}

        <RegisterForm/>
        <Footer/>

        </>

    )
}

export default Register;