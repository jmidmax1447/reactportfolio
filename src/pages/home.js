import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import nameBg from "../assets/backgroundname.svg";
import heroBg from "../assets/background-01.png";
import "../styles/home.css";

function Home () {
    return (
        <div className="home">
            <div className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
                <motion.svg
                className="about-bg"
                xmlns="http://www.w3.org/2000/svg"
                width="813"
                height="719"
                viewBox="0 0 813 719"
                fill="none"
                initial={{ opacity: 0, x: 220 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                <path
                    d="M762.562 0H0V719L793.644 89.1654C830.743 59.7237 809.924 0 762.562 0Z"
                    fill="#1E1E1E"
                />
                </motion.svg>

                <motion.svg
                className="about-bg-2"
                xmlns="http://www.w3.org/2000/svg"
                width="417"
                height="405"
                viewBox="0 0 417 405"
                fill="none"
                initial={{ opacity: 0, x: -220 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                <path
                    d="M50.0986 405L416.735 405L416.735 0L19.0046 315.844C-18.0789 345.293 2.74455 405 50.0986 405Z"
                    fill="#1E1E1E"
                />
                <path
                    d="M174.159 352L349.735 352C360.78 352 369.735 343.046 369.735 332V157.144C369.735 139.346 348.233 130.414 335.621 142.973L160.046 317.829C147.407 330.416 156.321 352 174.159 352Z"
                    fill="#C94A1E"
                />
                </motion.svg>

                <motion.img
                src={nameBg}
                alt="name background"
                className="namething"
                initial={{ opacity: 0, x: -80, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>

            <div className="home-below">
                <h1 className="welcome-title">Welcome.</h1>
                    <div className="below-welcome">
                        <p className="hellomyfriend">Hi, I’m Jason...</p>
                        <p className="welcome-text">
                            I am a soon-to-be graduate from the University of Central Florida, earning my degree in Digital Media with a focus on Web and Social Platforms. My coursework has provided me with a strong foundation in UI/UX design, front-end and back-end development, and content production. Throughout this portfolio, you’ll find a collection of projects from my academic experience that reflect my growth and skills in the field of digital media and interactive design. Feel free to explore my work and see how I bring ideas to life through thoughtful design and development.
                        </p>
                        <div className="welcome-actions">
                            <NavLink className="welcome-btn" to="/about">
                                <span>More About Me</span>
                            </NavLink>
                            <NavLink className="welcome-btn" to="/projects">
                                <span>Projects</span>
                            </NavLink>
                            <NavLink className="welcome-btn welcome-btn--primary" to="/contact">
                                <span>Contact</span>
                            </NavLink>
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default Home;