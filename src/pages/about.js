import { motion } from "framer-motion";
import "../styles/about.css";
import { slideFromRight } from "../components/pageTransition";
import Skills from "../components/skills"

function About () {
    return (
        <motion.div
        variants={slideFromRight}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="about">
                <h1 className="aboutyeah">About Me</h1>
                <div className="aboutmebox">
                    <p className="aboutmetext">I’m a digital media designer and developer with a focus on creating clean, user-centered web experiences while also bringing a strong background in visual content production. My skill set combines UI/UX design with front-end and back-end development, allowing me to build projects with a full scope.</p>
                    <p className="aboutmetext">Alongside web design, I enjoy working on the production side of digital media, including filming, photography, video editing, and creating graphics using tools like Adobe Creative Suite and other creative platforms. This combination lets me approach projects from multiple angles, whether I’m designing an interface, developing a site, or producing the visual content that brings it to life.</p>
                    <p className="aboutmetext">I’m especially interested in how design, development, and media production come together to create engaging digital experiences, and I’m always looking to grow my skills through new tools, techniques, and creative challenges.</p>
                </div>
            </div>
            <Skills />
        </motion.div>
    );
}
export default About;