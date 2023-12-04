import React from "react";
import { Link } from "react-router-dom";
import mission1 from "../assets/mission1.webp"
import mission2 from "../assets/mission2.jpeg"
import "./About.css"


const About = () => {


    return (
        <div className="about-page">
            <h1>About Coat 2 Coat</h1>
            <hr />

            <div className="image-container">
                <img src={mission1} alt="Image 1" />
                <p>At Coat 2 Coat, our gosl is to facilitate the seamless donation and distribution of coats, <br />
                ensuring warmth and comfort for all in need across NYC</p>
            </div>

            <div className="mission-statement">
                <h2>Our Mission</h2>
                <h4>
                    Coat 2 Coat is committed to providing warmth and support to those in
                    need. We aim to create a community where individuals can seamlessly
                    donate and receive coats. <br />Through volunteerism and sustainable
                    practices, we strive to make a positive impact and foster a sense of
                    unity. Join us in building a warmer and more compassionate world,
                    one coat at a time.
                </h4>
            </div>

            <div className="image-container">
                <img src={mission2} alt="Image 2" />
                <p>We are dedicated to fostering a sense of community and volunteerism, encouraging individuals to come together and make a positive impact. </p>
            </div>
            <button className="element1">
                <Link to="/">Back to Home</Link>
            </button>
        </div>
    );
};

export default About;
