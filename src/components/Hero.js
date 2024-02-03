import "./HeroStyles.css";

function Hero() {
    return (
        <>
            <div className="hero">
                <img alt="HeroImg" src="https://images.unsplash.com/uploads/1413399939678471ea070/2c0343f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>

            <div className="hero-text">
                <h1>Your Journey Your Story</h1>
                <p>Choose Your Favourite Destination</p>
                <a href="/">
                    Travel Plan
                </a>
            </div>



        </>

    )
}

export default Hero;