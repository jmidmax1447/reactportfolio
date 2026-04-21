import { motion } from "framer-motion";
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

            <div className="home-below container">
                <h1>Front-End Developer</h1>
                <p>
                I build modern, responsive interfaces with React. Check out my projects and
                reach out if you want to work together.
                </p>
            </div>
        </div>
    );
}
export default Home;