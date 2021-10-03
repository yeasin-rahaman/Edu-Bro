import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <div className="d-flex mt-5 justify-content-center">
                <h1 >Contact Us</h1>
            </div>
            <div className="container contact-form ">
                <form method="post">
                    <h3>Get in touch </h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className=" p-2">
                                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                            </div>
                            <div className=" p-2">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                            </div>
                            <div className=" p-2">
                                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                            </div>
                            <div className=" p-2">
                                <button type="button" class="btn btn-primary">Primary</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className=" p-2">
                                <textarea name="txtMsg" className="form-control message" placeholder="Your Message *" ></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ContactUs;