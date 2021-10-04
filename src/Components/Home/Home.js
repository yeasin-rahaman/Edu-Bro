import React, { useEffect, useState } from 'react';
import image from '../../images/hero-section-image.png'
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/Details.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const homeCourses = courses.slice(0, 3)
    return (
        <div>

            <section className="hero-section">
                <div className="container" >

                    <div className="row pt-5 pb-5">

                        <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center ">
                            <div>
                                <h3 >Learn Create Explore With</h3>
                                <h1 > <span className='edu'>Edu</span>  <span className='bro'>Bro</span>
                                </h1>
                                <p >Edu Bro partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.We offer a range of learning opportunities— from hands-on projects and courses to job-ready certificates and degree programs.</p>

                                <button type="button" className="btn btn-primary">
                                    Details

                                </button>

                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-4 ">
                            <img className="img-fluid" src={image} alt="" />
                        </div>

                    </div>
                </div>
            </section >
            <div className="container mt-5 mb-5" >
                <div className="d-flex mt-5 justify-content-center ">
                    <h1 >Popular Courses</h1>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 text-black  ">

                    {homeCourses.map(homeCourse => <div className="col" key={homeCourse.key}>
                        <div className="card h-100 hover">
                            <img src={homeCourse.img} className="img-fluid rounded-start" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{homeCourse.name}</h5>
                                <p className="card-text">{homeCourse.description}</p>
                            </div>
                            <div className="card-footer  text-center">
                                <h3 className="card-text"> ${homeCourse.price}</h3>
                            </div>
                        </div>
                    </div>)
                    }

                </div>
            </div>
        </div >

    );
};

export default Home;