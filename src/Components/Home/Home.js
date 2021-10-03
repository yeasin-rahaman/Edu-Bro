import React, { useEffect, useState } from 'react';
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
            <h1>Popular Courses</h1>
            <div className="container mt-5 mb-5 text-black" >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {homeCourses.map(homeCourse => <div className="col" key={homeCourse.key}>
                        <div className="card h-100">
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
        </div>
    );
};

export default Home;