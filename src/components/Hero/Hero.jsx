import Navbar from "../NavBar/Navbar";

export default function Hero() {
    return (
        <div className="hero-section" id="home">
            <Navbar />
            <div className="hero-content">
        <img src="./assets/images/profileimage.jpg" alt="Image" className="hero-image"/>
        <p className="hero-intro">Hi, my name is</p>
        <h1 className="hero-name">God'stime Ige</h1>
        {/* <p className="hero-role">I'm a Frontend Developer.</p> */}
        <p className="hero-description"> I’m a frontend developer who loves 
            crafting clean, responsive, and user-friendly websites.
             I’m passionate about blending design and code to create interfaces that feel intuitive and enjoyable. With a strong focus on React, JavaScript, Tailwind CSS, HTML, and Git, I enjoy turning 
             ideas into digital experiences that leave a lasting impression.
</p>
        <a href="https://docs.google.com/document/d/1BE1qej1qQAOVNoB_g7O2DXhWdvSo-GDcfntDpb5uCSg/edit?usp=sharing" className="resume-button">Resume</a>
            </div>
        </div>
    );
}

