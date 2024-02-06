import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg"

import RegisterForm from "../components/RegisterForm";

function Register(){
    return(
        <>
        <Navbar />
        <Hero cName="hero-mid" heroImg={AboutImg} title="Registration" btnClass="hide"/>

        <RegisterForm/>
        </>

    )
}

export default Register;