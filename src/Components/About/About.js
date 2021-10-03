import React from 'react';
import './About.css'
import image from "../../images/2.png"

const About = () => {
    return (
        <div>
            <div className="d-flex mt-5 justify-content-center">
                <h1 >About Us</h1>
            </div>
            <section class="hero-banner py-5 mt-5">
                <div class="container">
                    <div class="row row align-items-center">
                        <div class="col-lg-5 offset-lg-1 order-lg-1">
                            <img src={image} class="img-fluid" alt="Web Development" />
                        </div>
                        <div class="col-lg-6">
                            <h1 class="mt-3">Learn  Create Explore With Edu Bro </h1>
                            <p class="lead  my-5">Edu Bro partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
};



export default About;