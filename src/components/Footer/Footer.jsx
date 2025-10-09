import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <div>
            <footer className="footer" id="contacts">
                <h1>Contact</h1>
                <div className="footer-content">
                    <p>I'm a Frontend Developer dedicated to building scalable and efficient web solutions. 
                        I combine technical expertise with design creativity and 
                        clear communication to deliver user-friendly, 
                        impactful digital experiences</p>
                    <span><Mail size={20} /> igegodstime0@gmail.com</span>
                
                <div className="social-icons">
                    <a href="https://github.com/Victor645" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/god-stime-ige-01bb47232" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                    <a href="https://x.com/tunmise_web3" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
                </div>
                </div>
            </footer>
        </div>
    );
}