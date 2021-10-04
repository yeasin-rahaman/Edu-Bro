import React from 'react';
import './About.css'
import image from "../../images/2.png"

const About = () => {
    return (
        <div className="about-container">
            <div className="d-flex mt-5 justify-content-center">
                <h1 >About Us</h1>
            </div>
            <section className="hero-banner py-5 mt-5">
                <div className="container">
                    <div className="row row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-1">
                            <img src={image} className="img-fluid" alt="Web Development" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mt-3">Learn  Create Explore With <br /> Edu Bro </h1>
                            <p className="lead  my-5">Edu Bro partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
};



export default About;