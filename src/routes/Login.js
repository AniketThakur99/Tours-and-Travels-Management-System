import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg"
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

function Login(){
    return(
        <>
        <Navbar />
        <Hero cName="hero-mid" heroImg={AboutImg} title="Login" btnClass="hide"/>
        <LoginForm/>
        </>

    )
}

export default Login;